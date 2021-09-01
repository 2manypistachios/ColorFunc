import { HStack, Link, Text, useColorMode, VStack } from '@chakra-ui/react';

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <VStack
      py={4}
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      transition="background 100ms linear"
    >
      <HStack fontSize="sm" fontWeight="600">
        <Text>Created by</Text>
        <Link href="https://github.com/2manypistachios" isExternal>
          Max Pod
        </Link>
      </HStack>
    </VStack>
  );
};

export default Footer;
