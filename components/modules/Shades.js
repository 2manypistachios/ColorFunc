import { derivative } from 'mathjs';

import { Heading } from "@chakra-ui/react"

import {
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"

import { loopState, brightFuncState, satFuncState } from "../state"; 
import { useRecoilState } from "recoil";

export default function Shades() {
  return (
    <FormControl id="color-picker" display="flex" flexDirection="column">
      <Heading>Shades</Heading>

      <FormLoop />
      <FormBright />
      <FormSat />
    </FormControl>
  )
}

const FormLoop = () => {
  const [loop, setLoop] = useRecoilState(loopState);

  return (
    <>
      <FormLabel>Loop Count</FormLabel>
      <NumberInput value={loop} min={1} max={20} onChange={(value) => setLoop(value)}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormHelperText mb="1.2em">{`Will generate ${loop} shades`}</FormHelperText>
    </>
  )
}

const FormBright = () => {
  const [brightFunc, setBrightFunc] = useRecoilState(brightFuncState);

  try {
    var brightSlope = `Each step darkens by: ${derivative(brightFunc, "x").toString()}%`
  } catch (err) {
    var brightSlope = err.toString();
  }

  return (
    <>
      <FormLabel>Brightness Expression</FormLabel>
      <Input type="text" value={brightFunc} onChange={(event) => setBrightFunc(event.target.value)} />
      <FormHelperText mb="1.2em">{brightSlope}</FormHelperText>
    </>
  )
}

const FormSat = () => {
  const [satFunc, setSatFunc] = useRecoilState(satFuncState);

  try {
    var satSlope = `Each step saturates by: ${derivative(satFunc, "x").toString()}%`
  } catch (err) {
    var satSlope = err.toString();
  }

  return (
    <>
      <FormLabel>Saturation Expression</FormLabel>
      <Input type="text" value={satFunc} onChange={(event) => setSatFunc(event.target.value)} />
      <FormHelperText>{satSlope}</FormHelperText>
    </>
  )
}