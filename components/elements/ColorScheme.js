import {
  Box,
  useRadioGroup,
  useRadio,
  VStack,
} from "@chakra-ui/react"

import useStore from "@/store/useStore"
import { hueShifts } from "@/utils/harmonies"
import { useEffect } from "react"


export default function ColorTypes() {
  const [harmony, setHarmony] = useStore('harmony, setHarmony')
  const options = Object.keys(hueShifts)
  const readableOptions = options.map((shift) => shift.replace('-', ' ').replace(/^\w/g, c => c.toUpperCase()))

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

export const RadioCard = ({ children, ...props }) => {
  const hues = useStore('hues')
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  let bg = "transparent"
  const isChecked = checkbox['data-checked']
  if (isChecked !== undefined) {
    let hexes = hues.map((hue) => hue.toHex())
    if (hexes.length == 1) {
      bg = [...hexes, ...hexes]
    } else {
      bg = hexes
    }
  }

  // Todo: Clean up reactivity
  useEffect(() => {
  }, [isChecked])

  return (
    <Box as="label" width="100%"

    >
      <input {...input} />
      <Box
        {...checkbox}

        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"

        sx={{
          borderImage: `linear-gradient(to right, ${bg}) 1`
        }}

        _checked={{
          borderWidth: '5px',
        }}
        px={5}
        py={3}
      >
        {children}
      </Box>
    </Box>
  )
}