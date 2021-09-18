import { Box, Grid, GridItem, Text, useColorModeValue, List, ListItem, ListIcon, Icon } from "@chakra-ui/react";

import { SiTailwindcss } from "react-icons/si"
import { MdColorLens, } from "react-icons/md"
import { AiOutlineBgColors, AiOutlineFunction, AiFillApi, AiOutlineShareAlt } from "react-icons/ai"
import { FaRobot } from "react-icons/fa"
import { IoIosConstruct } from "react-icons/io"
import { GiBrain } from "react-icons/gi"

import Highlight from 'src/components/elements/Highlight'
import ColorBox from 'src/components/elements/ColorBox'

const Features = () => {
  const horizRem = 2, horizMulti = 6, vertRem = 8, vertMulti = 4

  return (
    <Box bg={[useColorModeValue("bright", "gray.800")]}>
      <Grid templateColumns="repeat(5, 1fr)" templateRows="repeata(3,1fr)" minBlockSize="200px"
        maxW="80rem"
        ml="auto"
        mr="auto"
        pl={`calc(${horizRem}rem + (${horizMulti - horizRem}) * ((100vw - 20rem)/ (100 - 20)))`}
        pr={`calc(${horizRem}rem + (${horizMulti - horizRem}) * ((100vw - 20rem)/ (100 - 20)))`}
        pt={`calc(${vertRem}rem + (${vertMulti - vertRem}) * ((100vw - 20rem)/ (100 - 20)))`}
        pb={`calc(${vertRem}rem + (${vertMulti - vertRem}) * ((100vw - 20rem)/ (100 - 20)))`}
      >
        <GridItem colStart={1} rowStart={1} width="100%" sx={{ 'aspectRatio': '1' }} />
        <GridItem colStart={1} rowStart={2} width="100%" sx={{ 'aspectRatio': '1' }} />

        <GridItem colStart={[1, 1, 1, 2]} colSpan={[4, 4, 4, 1]} rowStart={1} rowSpan={2} bg="pink.500" w="100%" height="100%">
          <ColorBox />
        </GridItem>
        <GridItem colStart={[5, 5, 5, 1]} rowStart={[3]} w="100%" sx={{ 'aspectRatio': '1' }} bg="blue.500" display="flex" alignItems="center" justifyItems="center">
          <Icon as={MdColorLens} w="100%" h="100%" />
        </GridItem>
        <GridItem colStart={[1, 1, 1, 4]} colSpan={2} rowStart={[3, 3, 3, 1]} display="flex" flexDir="column" mt={{ base: '2rem', lg: '0rem' }}>
          <Highlight hl={useColorModeValue("red.200", "red.800")} as="h2" size="lg" mb="2rem">Functional Color Design.</Highlight>
          <Text fontSize="lg">Understand and update your theme using best-practices color theory.</Text>
        </GridItem>
        <GridItem colStart={[1, 1, 1, 4]} colSpan={{ base: 4, lg: 2 }} rowStart={[4, 4, 4, 2]} rowSpan={2} pt="2rem" display="flex" flexDir={{ base: 'row', lg: 'column' }} gridGap="2rem">
          <List>
            <ListItem fontSize="md">
              <ListIcon as={AiOutlineFunction} color="red.500" />
              Advanced tone & shade generation
            </ListItem>
            <ListItem fontSize="md">
              <ListIcon as={MdColorLens} color="red.500" />
              Wide range of scheme styles
            </ListItem>
            <ListItem fontSize="md">
              <ListIcon as={SiTailwindcss} color="red.500" />
              Tailwind & Chakra Theme Compatible
            </ListItem>
            <ListItem fontSize="md">
              <ListIcon as={AiOutlineBgColors} color="red.500" />
              CSS-Var, JSON, Array Export
            </ListItem>
          </List>
          <List>
            <ListItem>Upcoming Pro Features:</ListItem>
            <ListItem fontSize="md">
              <ListIcon as={FaRobot} color="gray.500" />
              Personalized AI Generations
            </ListItem>
            <ListItem fontSize="md">
              <ListIcon as={GiBrain} color="gray.500" />
              Intelligent Context-Dependent ZCOM Schemes
            </ListItem>
            <ListItem fontSize="md">
              <ListIcon as={IoIosConstruct} color="gray.500" />
              Reverse Engineer & Extend Palettes
            </ListItem>
            <ListItem fontSize="md">
              <ListIcon as={AiFillApi} color="gray.500" />
              Customizable Rest API & GraphQl API
            </ListItem>
            <ListItem fontSize="md">
              <ListIcon as={AiOutlineShareAlt} color="gray.500" />
              Instant Share Your Palettes
            </ListItem>
          </List>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Features;