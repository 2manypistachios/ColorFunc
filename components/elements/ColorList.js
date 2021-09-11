import { Box, Heading, Wrap, WrapItem, Square } from "@chakra-ui/react"

import Wrapper from "@/layouts/Wrapper"


const ColorList = ({ subColors }) => (
  <>
    {subColors.map((colors) => (
      <Box key={colors.group} w="100%">
        <Wrapper y="0-0" className="wrapper">
          <Heading fontWeight="900" my="1em" textTransform="capitalize" textAlign={["center", "left"]}>{colors.group}</Heading>
          <Wrap justify={["center", "left"]} className="text">
            {colors.tones.map((tone) => <ColorBox color={tone} key={`${colors.group}-${tone.id}`} />)}
          </Wrap>
        </Wrapper>
      </Box>
    ))}
  </>
)

const ColorBox = ({ color }) => {
  return (
    <WrapItem className="text">
      <Square flexDirection="column" bg={color.toHex()} size={["25vw"]} maxH="200px" maxW="200px" color={color.isLight()? 'gray.800' : 'whiteAlpha.900'}>
        <Heading size="sm">{color.toHex()}</Heading>
      </Square>
    </WrapItem>
  )
}


export default ColorList;