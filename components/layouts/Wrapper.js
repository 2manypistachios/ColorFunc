import { Box } from '@chakra-ui/react';


export default function Wrapper({y = "7.5-10", x= "1-8", ...props }) {
  const [vertRem, vertMulti] = y.split("-");
  const [horizRem, horizMulti] = x.split("-");

  return (
    <Box
      className="wrapper"
      maxW="80rem"
      ml="auto"
      mr="auto"
      pl={`calc(${horizRem}rem + (${horizMulti-horizRem}) * ((100vw - 20rem)/ (100 - 20)))`}
      pr={`calc(${horizRem}rem + (${horizMulti-horizRem}) * ((100vw - 20rem)/ (100 - 20)))`}
      pt={`calc(${vertRem}rem + (${vertMulti-vertRem}) * ((100vw - 20rem)/ (100 - 20)))`}
      pb={`calc(${vertRem}rem + (${vertMulti-vertRem}) * ((100vw - 20rem)/ (100 - 20)))`}
      {...props}
    >
      {props.children}
    </Box>
  )
}