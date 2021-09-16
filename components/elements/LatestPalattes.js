import useSWR from 'swr'

import { Box, Grid, GridItem, Heading, Text, Square, useColorModeValue, Container, Flex } from "@chakra-ui/react";

import Wrapper from '@/layouts/Wrapper'
import Highlight from '@/elements/Highlight'
import { GiConsoleController } from 'react-icons/gi';
import setSiteSnippet from '../hooks/setSiteSnippet';

const fetcher = (url) => fetch(url).then((res) => res.json())
const LatestPalattes = () => {
  const horizRem = 5, horizMulti = 8
  const { data: snippets, mutate } = useSWR(`/api/snippets/`, fetcher)

  return (
    <Box bg={useColorModeValue("bright", "gray.800")}>
      <Grid templateColumns="repeat(8, 1fr)" templateRows="repeat(5, 1fr)" pt="50px"
        maxW="80rem"
        ml="auto"
        mr="auto"
        pl={`calc(${horizRem}rem + (${horizMulti - horizRem}) * ((100vw - 20rem)/ (100 - 20)))`}
        pr={`calc(${horizRem}rem + (${horizMulti - horizRem}) * ((100vw - 20rem)/ (100 - 20)))`}
      >

        <GridItem rowStart={2} colStart={2} colSpan={3}>
          <Highlight hl={useColorModeValue("green.200", "green.800")} size="xl" mb="1rem"> Latest Schemes</Highlight>
        </GridItem>

        {snippets && <GridItems snippets={snippets} />}

      </Grid>
    </Box>
  )
}

export default LatestPalattes;

// Todo: Clean up snippet struct and remove snippet.snipppet
const GridItems = (snippets) => {
  let totalSnippets = snippets.snippets;

  while (totalSnippets.length < 6) {
    totalSnippets = [...totalSnippets, snippets.snippets[0]]
  }
  console.log(totalSnippets);

  let pos = [
    [7, 1, 1],
    [6, 2, 2],
    [5, 3, 2],
    [4, 3, 1],
    [3, 4, 1],
    [1, 3, 2]
  ]

  return (
    <>
      <GridSquare rowStart={1} colStart={7} w="100%" bg={totalSnippets[1].data.hex} pos="relative" transform="translateY(-100%) translateX(100%)">
        <Heading size="xl" mb="1rem">Site</Heading>
      </GridSquare>

      {totalSnippets.map((snippet, index) => (
        <SquareSnippet snippet={snippet} pos={pos[index]} key={index} index={index} />
      ))}
    </>
  )
}

const SquareSnippet = ({ snippet, index, pos, ...props }) => {
  const changeAlgo = setSiteSnippet(snippet.data);

  return (
    <GridSquare colStart={pos[0]} rowStart={pos[1]} span={pos[2]} bg={snippet.data.hex} onClick={changeAlgo} {...props}>
      {/*<Heading size="sm" mb="1rem">{snippet.data.name}</Heading>*/}
    </GridSquare>
  )
}

const GridSquare = ({ children, span = 1, ...props }) => {
  return (
    <GridItem w="100%" sx={{ 'aspectRatio': '1' }} rowSpan={span} colSpan={span} {...props} display="grid" alignItems="center" justifyItems="center">
      {children}
    </GridItem>

  )
}