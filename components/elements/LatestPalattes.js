import { forwardRef } from '@chakra-ui/system';
import { Portal, Container, Text, Box, Grid, GridItem, Heading, useColorModeValue, useDisclosure } from "@chakra-ui/react";

import Highlight from '@/elements/Highlight'
import setSiteSnippet from '../hooks/setSiteSnippet';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/router'

const LatestPalattes = ({ snippets }) => {
  const horizRem = 5, horizMulti = 8
  const ref = useRef()

  return (
    <Box bg={useColorModeValue("bright", "gray.800")} pos="relative" ref={ref}>
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

        <GridItems snippets={snippets} parentRef={ref} />
      </Grid>
    </Box>
  )
}

export default LatestPalattes;

const GridItems = ({ snippets, parentRef }) => {
  let totalSnippets = snippets;

  while (totalSnippets.length < 6) {
    totalSnippets = [...totalSnippets, snippets[0]]
  }

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
      <MotionGridSquare
        whileHover={{ scale: 2 }}
        animate={{ x: "100%", y: "-100%" }}
        initial={false}

        transform="translateY(-100%) translateX(100%)"
        rowStart={1} colStart={7}
        bg={totalSnippets[1].data.hex}
        pos="relative"
      >
      </MotionGridSquare>

      {totalSnippets.map((snippet, index) => (
        <SquareSnippet snippet={snippet} pos={pos[index]} key={index} index={index} parentRef={parentRef} />
      ))}
    </>
  )
}

const SquareSnippet = ({ snippet, parentRef, pos, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter()
  const changeAlgo = setSiteSnippet(snippet.data);

  const handleClick = (e) => {
    e.preventDefault()
    changeAlgo()
    router.push('/editor')
  }

  return (
    <MotionGridSquare
      whileHover={{ scale: 1.5 }}
      onHoverStart={onOpen}
      onHoverEnd={onClose}

      sx={{ 'aspectRatio': '1' }}
      width="100%"
      colStart={pos[0]} rowStart={pos[1]} span={pos[2]}
      bg={snippet.data.hex} onClick={handleClick} {...props}
    >
      {isOpen && <GridSquareContent data={snippet.data} parentRef={parentRef} />}
    </MotionGridSquare>
  )
}

const GridSquareContent = ({ data, parentRef }) => {
  return (
    <Portal containerRef={parentRef}>
      <MotionBox
        initial={{ opoacity: 0 }}
        animate={{ opacity: .8 }}

        bg={data.hex}

        position="absolute" zIndex={1}
        display="grid" justifyItems="center" alignItems="center"
        top="0" bottom="0" left="0" right="0" mx='auto'
        pointerEvents="none"
        width='80vw'
        height='100%'
      >
        <Container opacity="1">
          <Heading size="lg">{data.name}</Heading>
          <Text size="lg">{`A ${data.harmony} scheme starting with ${data.hex}.`}</Text>
        </Container>
      </MotionBox>
    </Portal>
  )
}


const GridSquare = forwardRef(({ children, span = 1, ...props }, ref) => {
  return (
    <GridItem ref={ref}
      w="100%"
      rowSpan={span} colSpan={span} {...props}
      display="grid" alignItems="center" justifyItems="center">
      {children}
    </GridItem>
  )
})

const MotionGridSquare = motion(GridSquare);
const MotionBox = motion(Box)