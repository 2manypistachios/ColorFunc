import { Box, Heading, Wrap, WrapItem, Square, useDisclosure, Text } from "@chakra-ui/react"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"

import Wrapper from "@/layouts/Wrapper"


const ColorList = ({ subColors }) => (
  <>
    {subColors.map((colors) => (
      <Box key={colors.group} w="100%">
        <Wrapper y="0-0">
          <Heading fontWeight="900" my="1em" textTransform="capitalize" textAlign={["center", "left"]}>{colors.group}</Heading>
          <Wrap justify={["center", "left"]}>
            <AnimateSharedLayout>
              {colors.tones.map((tone) => <ColorBox color={tone} key={`${colors.group}-${tone.id}`} />)}
            </AnimateSharedLayout>
          </Wrap>
        </Wrapper>
      </Box>
    ))}
  </>
)

const ColorBox = ({ color }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <MotionWrapItem
      layout
      onHoverStart={onOpen}
      onHoverEnd={onClose}
      pos="relative"
      //flex={1}
      flex={isOpen ? 2 : 1}
      initial={{ scale: 1, zIndex: 0 }}
      whileHover={{ scale: 1.1 }}
      _hover={{ zIndex: 2 }}
      className="wrapitem"
    >
      <Square
        bg={color.toHex()}
        flexDirection="column"
        w="100%"
        color={color.isLight() ? 'gray.800' : 'whiteAlpha.900'}
      >
        <MotionHeading layout size="sm" py="2rem">{color.toHex()}</MotionHeading>
        <AnimatePresence>
          {isOpen && <Content key={color.toHex()} color={color} />}
        </AnimatePresence>
      </Square>
    </MotionWrapItem>

  )
}

const Content = ({ color }) => (
  <MotionBox
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0 }}

    flex="1"
    bg={color.isLight() ? 'whiteAlpha.300' : 'blackAlpha.300'}
    px="1rem" py="2rem"
  >
    <Text>#{color.id}</Text>
    <Text>{color.toHslString()}</Text>
    <Text>{color.toRgbString()}</Text>
  </MotionBox>
)

const MotionWrapItem = motion(WrapItem)
const MotionHeading = motion(Heading);
const MotionBox = motion(Box);
// const MotionSquare = motion(Square);

export default ColorList;