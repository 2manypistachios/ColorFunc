import { Box, Grid, GridItem, Heading, Text, useColorModeValue } from "@chakra-ui/react";

import Image from 'src/components/elements/Image'
import Gif from '/public/colorFuncGif.gif'


const Demo = () => {
  const horizRem = 2, horizMulti = 6 // , vertRem = 3, vertMulti = 4

  return (
    <Box bg={useColorModeValue("blue.200", "blue.700")} color={useColorModeValue('blackAlpha.800', 'bright')}>
      <Grid templateColumns="2fr 4fr 2fr" templateRows="auto repeat(3, 1fr)"
        maxW="80rem"
        ml="auto"
        mr="auto"
        pl={`calc(${horizRem}rem + (${horizMulti - horizRem}) * ((100vw - 20rem)/ (100 - 20)))`}
        pr={`calc(${horizRem}rem + (${horizMulti - horizRem}) * ((100vw - 20rem)/ (100 - 20)))`}
      >
        <GridItem colStart={1} colSpan={3} w="100%" p="2rem">
          <Heading size="lg" mb="1rem">Powerful Editing</Heading>
          <Text size="lg">Right in your browser, no designer or software needed</Text>
        </GridItem>


        <GridItem rowStart={{ base: 6, md: 2 }} colStart={{ base: 2, md: 3, lg: 1 }} w="100%" p=".5rem">
          <Heading size="sm" mb=".2rem">Quick 3 Step Process</Heading>
          <Text size="sm">Export in minutes.</Text>
        </GridItem>

        <GridItem rowStart={{ base:6, md: 3, lg: 2 }} colStart={{ base: 3 }} w="100%" p=".5rem">
          <Heading size="sm" mb=".2rem">Progressive labeling</Heading>
          <Text size="sm">Understand your palette</Text>
        </GridItem>

        <GridItem rowStart={{ base:6, md: 4, lg: 4 }} colStart={{ md: 3, lg: 1 }} w="100%" p=".5rem">
          <Heading size="sm" mb=".2rem">Extensive configuration</Heading>
          <Text size="sm">Reduce your abstractions</Text>
        </GridItem>

        <GridItem rowStart={2} rowSpan={4} colStart={{ base: 1, lg: 2 }} colSpan={{ base: 3, md: 2, lg: 1 }} w="100%" h="100%" bg="gray.900">
          <Image src={Gif} alt="Demo of application"/>
        </GridItem>

      </Grid>
    </Box >
  )
}

export default Demo;