import { Box, Heading } from "@chakra-ui/react";
import { TwitterPicker } from "react-color";

import { useSetRecoilState } from "recoil";

import Color from "color";
import { brightFuncState, loopState, satFuncState, colorSchemeState, startingColorState } from '@/components/state';
import { colorGen } from "@/utils/colors";

import DeleteSnippet from "@/elements/DeleteSnippet"

export default function SnippetList({ snippet, snippetDeleted }) {

  const setStartingColor = useSetRecoilState(startingColorState)
  const setColorScheme = useSetRecoilState(colorSchemeState)
  const setLoop = useSetRecoilState(loopState)
  const setBrightFunc = useSetRecoilState(brightFuncState)
  const setSatFunc = useSetRecoilState(satFuncState)


  const { colorScheme, startingColor, brightFunc, satFunc, loop, name } = snippet.data;
  const colorsObj = colorGen({ colorScheme, startingColor, brightFunc, satFunc, loop })

  const colors = Object.values(colorsObj).flatMap((colorGroup) => [...colorGroup].flatMap(([, val]) => val.hex))

  const changeAlgo = () => {
    setStartingColor(Color(startingColor));
    setColorScheme(colorScheme)
    setLoop(loop)
    setBrightFunc(brightFunc)
    setSatFunc(satFunc)
  }

  return (
    <Box cursor="pointer">
      <Heading onClick={changeAlgo} size="large" mt="1.5rem" w="80%" display="inline-block">{name}</Heading>
      <DeleteSnippet id={snippet.id} snippetDeleted={snippetDeleted} w="5%" display="inline-block"/>
      <Box onClick={changeAlgo}>
        <TwitterPicker colors={colors} triangle="hide" color={colors[0]} />
      </Box>
    </Box>
  )
}