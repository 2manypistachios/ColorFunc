import { Heading } from "@chakra-ui/react"
import { SketchPicker } from "react-color"
import ColorPicker from "@/components/colorWheel/ColorPicker"

import ColorScheme from "@/elements/ColorScheme"
import useStore from "@/store/useStore"

const Hues = () => {
  const [hex, setHex, hues] = useStore('hex, setHex, hues')

  return (
    <>
      <Heading mb="1.2em">Primary Color</Heading>
      <ColorPicker
        initialColor={hex}
        schemeColors={Object.values(hues).map((v) => v.hex())}
        onChange={(val) => setHex(val.hex)}
        size={250} />
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