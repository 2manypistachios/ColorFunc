import useSWR from 'swr'

import { useUser } from "@auth0/nextjs-auth0";
import { Box } from "@chakra-ui/react"

import AuthLogin from "@/elements/AuthLogin"
import Snippet from "@/elements/Snippet"
import SaveSnippet from "@/elements/SaveSnippet"

const Saved = () => {
  const { user } = useUser();
  return (
    <>
      {user ? <UserPanel nickname={user.nickname} />
        : <AuthLogin />
      }
    </>
  )
}

export default Saved


const UserPanel = ({ nickname }) => {
  if (!nickname) return;
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data: snippets, mutate } = useSWR(`/api/snippets/${nickname}`, fetcher)

  return (
    <>
      <SaveSnippet nickname={nickname} />
      <Box mt="2rem" mb="1rem">{nickname} Saved Presets</Box>
      {snippets && snippets.map((snippet) => <Snippet key={snippet.id} snippet={snippet} snippetDeleted={mutate} />)}
    </>
  )
}