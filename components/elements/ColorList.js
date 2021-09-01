import { Box, Heading, Text, Wrap, Center } from "@chakra-ui/react"

import Wrapper from "@/layouts/Wrapper"


const ColorList = ({ subColors }) => {
  return (
    <>
      {Object.keys(subColors).map((colorGroup) => (
        <Box key={colorGroup} w="100%">
          <Wrapper y="0-0">
            <Heading fontWeight="900" my="1em" textTransform="capitalize">{colorGroup}</Heading>
            <Wrap>
              {[...subColors[colorGroup]].map(([key, val]) => <ColorBox color={val} id={key} key={key} />)}
            </Wrap>
          </Wrapper>
        </Box>
      ))}
    </>
  )
}

const ColorBox = (({ color, id }) => {
  return (
    <>
      <Center flexDirection="column" bg={color.hex} w="200px" h="200px">
        <Heading size="sm">{color.hex}</Heading>
        <Heading size="sm">{id}</Heading>
        <Text>{JSON.stringify(color.hsl)}</Text>
      </Center>
    </>
  )
})

export default ColorList;