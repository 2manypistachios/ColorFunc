import { Box, Heading } from "@chakra-ui/react";
// import { colord } from 'colord';

import useStore from "src/store/useStore"
// import { colorGen } from "@/utils/colors";
import DeleteSnippet from "src/components/elements/DeleteSnippet"


export default function SnippetList({ snippet, snippetDeleted }) {
  const [setHex, setHarmony, setLoop, setBrightFunc, setSatFunc] = useStore('setHex, setHarmony, setLoop, setBrightFunc, setSatFunc')
  const { harmony, hex, brightFunc, satFunc, loop, name } = snippet.data;

  // const colorsObj = colorGen({ harmony, startingColor: colord(hex), brightFunc, satFunc, loop })
  // const colors = Object.values(colorsObj).flatMap((colorGroup) => [...colorGroup].flatMap(([, val]) => val.hex))

  const changeAlgo = () => {
    setHex(hex);
    setHarmony(harmony)
    setLoop(loop)
    setBrightFunc(brightFunc)
    setSatFunc(satFunc)
  }

  return (
    <Box cursor="pointer">
      <Heading onClick={changeAlgo} size="large" mt="1.5rem" w="80%" display="inline-block">{name}</Heading>
      <DeleteSnippet id={snippet.id} snippetDeleted={snippetDeleted} w="5%" display="inline-block"/>
      <Box onClick={changeAlgo}>
        {/* //Todo: Replace: <TwitterPicker colors={colors} triangle="hide" color={colors[0]} />*/}
      </Box>
    </Box>
  )
}