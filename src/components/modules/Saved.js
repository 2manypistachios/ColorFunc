import useSWR from 'swr'

import { useUser } from "@auth0/nextjs-auth0";
import { Box } from "@chakra-ui/react"

import AuthLogin from "@/elements/AuthLogin"
import Snippet from "@/modules/snippets/Snippet"
import SaveSnippet from "@/modules/snippets/SaveSnippet"

const Saved = () => {
  const { user } = useUser();
  return (
    <>
      { (user && Object.prototype.hasOwnProperty.call(user,'nickname')) ? <UserPanel nickname={user.nickname} />
        : <AuthLogin />
      }
    </>
  )
}

export default Saved

const fetcher = (url) => fetch(url).then((res) => res.json())
const UserPanel = ({ nickname }) => {
  const { data: snippets, mutate } = useSWR(`/api/snippets/${nickname}`, fetcher)

  return (
    <>
      <SaveSnippet nickname={nickname} />
      <Box mt="2rem" mb="1rem">{nickname} Saved Presets</Box>
      {snippets && snippets.map((snippet) => <Snippet key={snippet.id} snippet={snippet} snippetDeleted={mutate} />)}
    </>
  )
}