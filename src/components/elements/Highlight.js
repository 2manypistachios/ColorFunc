import { Heading, Text } from "@chakra-ui/react"


const Highlight = ({ children, hl, as = 'heading', ...props }) => {
  if (as === 'text') {
    return (
      <Text {...props} pos="relative" zIndex="1" _after={{
        content: "''",
        pos: 'absolute',
        left: '-10px',
        right: '-10px',
        bottom: 0,
        zIndex: -1,
        h: '14px',
        bg: hl
      }}> {children}</Text >
    )
  } else {
    return (
      <Heading {...props} pos="relative" zIndex="1" _after={{
        content: "''",
        pos: 'absolute',
        left: '-10px',
        right: '-10px',
        bottom: 0,
        zIndex: -1,
        h: '14px',
        bg: hl
      }}> {children}</Heading >
    )
  } 
}

export default Highlight