import { Heading } from "@chakra-ui/react"
import { SketchPicker } from "react-color"


import { useRecoilState, useRecoilValue } from "recoil"
import Color from "color"
import ColorScheme from "@/elements/ColorScheme"

import { huesState, startingColorState } from "../store/state"


const Hues = () => {
  const [startingColor, setStartingColor] = useRecoilState(startingColorState)
  const hues = useRecoilValue(huesState)

  return (
    <>
      <Heading mb="1.2em">Primary Color</Heading>
      <SketchPicker disableAlpha presetColors={Object.values(hues).map((v) => v.hex())} color={startingColor.hex()} onChange={(val) => setStartingColor(Color(val.hex))} />
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