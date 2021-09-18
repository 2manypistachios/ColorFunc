import { Link, Text, Flex } from '@chakra-ui/react';


const Footer = () => (
  <>
    <Flex display="footer"
      pos="relative" bottom="0" left="0" zIndex="0"
      width="100%" py={2}
      alignItems="baseline"
      justifyContent="center"
      gridGap=".5rem"
      transition="background 100ms linear"
    >
      <Text>Created by</Text>
      <Link href="https://github.com/2manypistachios" isExternal fontFamily="Coves" fontSize="large">Max Pod</Link>
    </Flex>
  </>
);

export default Footer;
