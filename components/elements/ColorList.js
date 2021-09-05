import { Box, Heading, Text, Wrap, WrapItem, Square } from "@chakra-ui/react"

import Wrapper from "@/layouts/Wrapper"


const ColorList = ({ subColors }) => (
    <>
      {Object.keys(subColors).map((colorGroup) => (
        <Box key={colorGroup} w="100%">
          <Wrapper y="0-0" className="wrapper">
            <Heading fontWeight="900" my="1em" textTransform="capitalize" textAlign={["center", "left"]}>{colorGroup}</Heading>
            <Wrap justify={["center", "left"]} className="text">
              {[...subColors[colorGroup]].map(([key, val]) => <ColorBox color={val} id={key} key={key} />)}
            </Wrap>
          </Wrapper>
        </Box>
      ))}
    </>
  )

const ColorBox = (({ color, id }) => (
    <WrapItem className="text">
      <Square flexDirection="column" bg={color.hex} size={["25vw"]} maxH="200px" maxW="200px">
        <Heading size="sm">{color.hex}</Heading>
        <Heading size="sm">{id}</Heading>
        <Text>{JSON.stringify(color.hsl)}</Text>
      </Square>
    </WrapItem>
  ))

export default ColorList;