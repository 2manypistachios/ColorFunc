import { Box, Grid, GridItem, Text, useColorModeValue, List, ListItem, ListIcon, Icon } from "@chakra-ui/react";
import Highlight from '@/elements/Highlight'

import { SiTailwindcss } from "react-icons/si"
import { MdColorLens } from "react-icons/md"

import ColorBox from '@/elements/ColorBox'

const Features = () => {
  const horizRem = 5, horizMulti = 8, vertRem = 8, vertMulti = 4

  return (
    <Box bg={useColorModeValue("bright", "gray.800")}>
      <Grid templateColumns="1fr 2fr 3em 2fr" templateRows="repeat(3, 1fr)"
        maxW="80rem"
        ml="auto"
        mr="auto"
        pl={`calc(${horizRem}rem + (${horizMulti - horizRem}) * ((100vw - 20rem)/ (100 - 20)))`}
        pr={`calc(${horizRem}rem + (${horizMulti - horizRem}) * ((100vw - 20rem)/ (100 - 20)))`}
        pt={`calc(${vertRem}rem + (${vertMulti - vertRem}) * ((100vw - 20rem)/ (100 - 20)))`}
        pb={`calc(${vertRem}rem + (${vertMulti - vertRem}) * ((100vw - 20rem)/ (100 - 20)))`}
      >
        <GridItem rowStart={3} w="100%" sx={{ 'aspectRatio': '1' }} bg="blue.500" display="flex" alignItems="center" justifyItems="center">
          <Icon as={MdColorLens} w="100%" h="100%" />
        </GridItem>
        <GridItem colStart={2} rowSpan={2} sx={{ 'aspectRatio': '1' }} bg="pink.500">
          <Box h="100%">
          <ColorBox />
          </Box>
        </GridItem>
        <GridItem colStart={4} display="flex" flexDir="column">
          <Highlight hl={useColorModeValue("red.200", "red.800")} as="h2" size="lg" mb="2rem">Functional Color Design.</Highlight>
          <Text fontSize="lg">Understand and update your theme using best-practices color theory.</Text>
        </GridItem>
        <GridItem colStart={4} rowSpan={2}>
          <List>
            <ListItem fontSize="md">
              <ListIcon as={SiTailwindcss} color="red.500" />
              Tailwind & Chakra Compatible
            </ListItem>
            <ListItem fontSize="md">
              <ListIcon as={SiTailwindcss} color="red.500" />
              Tailwind Compatible
            </ListItem>
          </List>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Features;