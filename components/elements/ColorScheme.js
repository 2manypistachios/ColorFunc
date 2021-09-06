import {
  Box,
  useRadioGroup,
  useRadio,
  VStack,

} from "@chakra-ui/react"

import { useRecoilState } from "recoil"
import { colorTheory } from "@/utils/colors"

import { colorSchemeState } from "../state"

export const RadioCard = ({children, ...props}) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label" width="100%">
      <input {...input} />
      <Box
        {...checkbox}

        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {children}
      </Box>
    </Box>
  )
}

export default function ColorTypes() {
  const [colorScheme, setColorScheme] = useRecoilState(colorSchemeState)

  const options = [...Object.keys(colorTheory),]

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "colorScheme",
    value: colorScheme,
    onChange: setColorScheme,
  })

  const group = getRootProps()

  return (
    <Box mt="1rem">
      <VStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </VStack>
    </Box>
  )
}