import {
  Box,
  useRadioGroup,
  useRadio,
  VStack,
} from "@chakra-ui/react"

import useStore from "@/store/useStore"
import { hueShifts } from "@/utils/harmonies"


export default function ColorTypes() {
  const [harmony, setHarmony] = useStore('harmony, setHarmony')
  
  const options = Object.keys(hueShifts)
  const readableOptions = options.map((shift) => shift.replace('-',' ').replace(/^\w/g, c => c.toUpperCase()))


  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "colorScheme",
    value: harmony,
    onChange: setHarmony,
  })

  const group = getRootProps()

  return (
    <Box mt="1rem">
      <VStack {...group}>
        {options.map((value, i) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {readableOptions[i]}
            </RadioCard>
          )
        })}
      </VStack>
    </Box>
  )
}

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