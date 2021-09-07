import { Heading } from "@chakra-ui/react"
import { SketchPicker } from "react-color"


import { useRecoilState, useRecoilValue } from "recoil"
import Color from "color"
import ColorScheme from "@/elements/ColorScheme"

import { huesState, startingColorState } from "../store/state"

import useStore from "@/store/useStore"

const Hues = () => {
  // Todo: Remove Recoil
  // const [startingColor, setStartingColor] = useRecoilState(startingColorState)
  // const hues = useRecoilValue(huesState)

  const [hex, setHex, hues] = useStore('hex, setHex, hues')

  return (
    <>
      <Heading mb="1.2em">Primary Color</Heading>
      <SketchPicker disableAlpha presetColors={Object.values(hues).map((v) => v.hex())} color={hex} onChange={(val) => setHex(val.hex)} />
      <ColorScheme />
    </>
  )
}

/*
const CustomHues = (props) => (
  <FormControl id="color-picker" display="flex" flexDirection="column">
    <FormLabel>Custom Hues</FormLabel>
    <Input placeHolder="weee" />
    <FormHelperText mb="1.2em">Put in color hexes seperated by commas.</FormHelperText>
  </FormControl>
)

const CustomScheme = (props) => (
  <FormControl id="color-picker" display="flex" flexDirection="column">
    <FormLabel>Custom Scheme Function</FormLabel>
    <Input placeHolder="weee" />
    <FormHelperText mb="1.2em">Will generate some stuff shades</FormHelperText>
  </FormControl>
)
*/

export default Hues;