import { Box, Heading, Wrap, WrapItem, useDisclosure, Text } from "@chakra-ui/react"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"

import Wrapper from "src/components/layouts/Wrapper"


const ColorList = ({ subColors }) => (
  <>
    <AnimateSharedLayout>
      <AnimatePresence>
        {subColors.map((colors) => (
          <MotionBox layout key={colors.group} w="100%"
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            exit={exit}
          >
            <Wrapper y="0-0">
              <MotionHeading layout fontWeight="900" my="1em" textTransform="capitalize" textAlign={["center", "left"]}>{colors.group}</MotionHeading>
              <Wrap justify={["center", "left"]}>
                {colors.tones.map((tone) => <ColorBox color={tone} key={`${colors.group}-${tone.id}`} />)}
              </Wrap>
            </Wrapper>
          </MotionBox>
        ))}
      </AnimatePresence>
    </AnimateSharedLayout>
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
      flex={isOpen ? 4 : 1}
      initial={{ scale: 1, zIndex: 0 }}
      whileHover={{ scale: 1, zIndex: 2 }}
      _hover={{ zIndex: 1 }}
      transition={noBounce}

      className="wrapitem"
      bg={color.toHex()}
      color={color.isLight() ? 'gray.800' : 'whiteAlpha.900'}
      borderRadius="5px"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"

    >
      <MotionHeading layout size="sm" p="2rem">{color.toHex()}</MotionHeading>
      <AnimatePresence>
        {isOpen && <Content key={color.toHex()} color={color} />}
      </AnimatePresence>
    </MotionWrapItem>

  )
}

const Content = ({ color }) => (
  <MotionBox
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={exit}
    transition={noBounce}
    mask=""

    width="100%" p="1rem"
    bg={color.isLight() ? 'whiteAlpha.300' : 'blackAlpha.300'}
  >
    <Text overflow="hidden" textOverflow="ellipsis">#{color.id}</Text>
    <Text overflow="hidden" textOverflow="ellipsis">{color.toHslString()}</Text>
    <Text overflow="hidden" textOverflow="ellipsis">{color.toRgbString()}</Text>
  </MotionBox>
)

const exit = { opacity: [1, 0, 0, 0], height: 0 }
const noBounce = { duration: .5 }

const MotionWrapItem = motion(WrapItem)
const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

export default ColorList;