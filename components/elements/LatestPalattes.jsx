import { Box, Grid, GridItem, Heading, Text, Square, useColorModeValue, Container, Flex } from "@chakra-ui/react";

import Wrapper from '@/layouts/Wrapper'
import Highlight from '@/elements/Highlight'

const LatestPalattes = () => {
  const horizRem = 5, horizMulti = 8

  return (
    <Box bg={useColorModeValue("bright", "gray.800")}>
      <Grid templateColumns="repeat(8, 1fr)" templateRows="repeat(5, 1fr)" pt="50px"
        maxW="80rem"
        ml="auto"
        mr="auto"
        pl={`calc(${horizRem}rem + (${horizMulti - horizRem}) * ((100vw - 20rem)/ (100 - 20)))`}
        pr={`calc(${horizRem}rem + (${horizMulti - horizRem}) * ((100vw - 20rem)/ (100 - 20)))`}
      >

        <GridItem rowStart={2} colStart={1} colSpan={3}>
          <Highlight hl={useColorModeValue("green.200", "green.800")} size="xl" mb="1rem"> Latest Creations </Highlight>
        </GridItem>

        <GridSquare rowStart={1} colStart={7} bg="red.500" >
          <Heading size="xl" mb="1rem"> 1 </Heading>
        </GridSquare>

        <GridSquare rowStart={1} colStart={7} w="100%" bg="green.500" pos="relative" transform="translateY(-100%) translateX(100%)">
          <Heading size="xl" mb="1rem"> 2 </Heading>
        </GridSquare>

        <GridSquare rowStart={2} colStart={6} span={2} bg="green.500">
          <Heading size="xl" mb="1rem"> 3 </Heading>
        </GridSquare>

        <GridSquare rowStart={4} colStart={6} span={2} bg="orange.500">
          <Heading size="xl" mb="1rem"> 4 </Heading>
        </GridSquare>

        <GridSquare rowStart={3} colStart={1} span={3} bg="purple">
          <Heading size="xl" mb="1rem"> 5 </Heading>
        </GridSquare>

        <GridSquare rowStart={3} colStart={5} span={1} bg="orange">
          <Heading size="xl" mb="1rem"> 6 </Heading>
        </GridSquare>

        <GridSquare rowStart={3} colStart={4} span={1} bg="green">
          <Heading size="xl" mb="1rem"> 7 </Heading>
        </GridSquare>

        <GridSquare rowStart={4} colStart={4} span={2} bg="red.500">
          <Heading size="xl" mb="1rem"> 7 </Heading>
        </GridSquare>
      </Grid>
    </Box>
  )
}

export default LatestPalattes;

const GridSquare = ({ children, span = 1, ...props }) => {
  return (
    <GridItem w="100%" sx={{ 'aspectRatio': '1' }} rowSpan={span} colSpan={span} {...props}>
      {children ?
        children :
        <Heading size="xl" mb="1rem">B0x</Heading>
      }
    </GridItem>

  )
}