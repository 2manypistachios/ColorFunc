import {
  Box,
  useRadioGroup,
  useRadio,
  VStack,
} from "@chakra-ui/react"

import useStore from "@/store/useStore"
import { hueShifts } from "@/utils/harmonies"
import { useEffect } from "react"

import { motion, useAnimation } from 'framer-motion'


export default function ColorTypes() {
  const [harmony, setHarmony] = useStore('harmony, setHarmony')
  const options = Object.keys(hueShifts)

  // See https://stackoverflow.com/questions/6251463/regex-capitalize-first-letter-every-word-also-after-a-special-character-like-a
  const readableOptions = options.map((shift) => shift.replace(/-/g, ' ').replace(/(\b[a-z](?!\s))/g, c => c.toUpperCase()))

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
  const { state, getInputProps, getCheckboxProps } = useRadio(props)
  const { isChecked } = state;

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  const controls = useAnimation()

  useEffect(() => {
    if (isChecked) {
      let hexes = hues.map((hue) => hue.toHex())
      if (hexes.length == 1) {
        hexes = [...hexes, ...hexes]
      }

      controls.start({
        borderImage: `linear-gradient(to right, ${hexes}) 1`,
        borderWidth: '2px',
      })
    } else {
      controls.start({
        borderImage: '',
        borderColor: 'var(--chakra-colors-whiteAlpha-300)',
        borderWidth: '1px',
      })
    }
  }, [isChecked, controls, hues])


  return (
    <Box as="label" width="100%">
      <input {...input} />
      <MotionBox
        {...checkbox}
        cursor="pointer"
        borderRadius="md"
        boxShadow="md"
        px={5}
        py={3}

        whileHover={{ scale: 1.1 }}
        animate={controls}
        transition={{ type: 'spring', bounce: 0, duration: .2}}
      >
        {children}
      </MotionBox>
    </Box>
  )
}

const MotionBox = motion(Box);