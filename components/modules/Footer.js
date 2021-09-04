import { Link, Text, Flex } from '@chakra-ui/react';

const Footer = () => (
  <>
    <Flex display="footer"
      pos="relative" bottom="0" left="0" zIndex="0"
      width="100%" py={2}
      justifyContent="center"
      gridGap="20px"
      transition="background 100ms linear"
    >
      <Text>Created by</Text>
      <Link href="https://github.com/2manypistachios" isExternal>Max Pod</Link>
    </Flex>
  </>
);

export default Footer;
