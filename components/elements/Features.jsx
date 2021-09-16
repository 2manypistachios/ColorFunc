import { Box, Grid, GridItem, Text, useColorModeValue, List, ListItem, ListIcon, Icon } from "@chakra-ui/react";
import Highlight from '@/elements/Highlight'

import { SiTailwindcss } from "react-icons/si"
import { MdColorLens, } from "react-icons/md"
import { AiOutlineBgColors, AiOutlineFunction, AiFillApi, AiOutlineShareAlt } from "react-icons/ai"
import {   FaRobot} from "react-icons/fa"
import { IoIosConstruct} from "react-icons/io"
import { GiBrain} from "react-icons/gi"

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
        <GridItem colStart={2} rowSpan={2} sx={{ 'aspectRatio': '1' }} bg="pink.500" mt="auto">
          <ColorBox />
        </GridItem>
        <GridItem colStart={4} display="flex" flexDir="column">
          <Highlight hl={useColorModeValue("red.200", "red.800")} as="h2" size="lg" mb="2rem">Functional Color Design.</Highlight>
          <Text fontSize="lg">Understand and update your theme using best-practices color theory.</Text>
        </GridItem>
        <GridItem colStart={4} rowSpan={2} pt="2rem">
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

            <ListItem mt="2rem">Upcoming Pro Features:</ListItem>
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