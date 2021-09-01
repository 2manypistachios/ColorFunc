import { Heading, useColorMode, Center, VStack, Box } from '@chakra-ui/react';

const PageContainer = ({ children, title }) => {
  const { colorMode } = useColorMode();

  const titleArr = title.split("/");
  return (
    <VStack
      h="100%"
      overflow="hidden"
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      transition="background 100ms linear"
    >
      <Box w="5%" pos="absolute" top="0" left="4" overflow="visible">
        <Heading pos="relative" fontFamily="Coves" as="h1" fontSize="8rem" alignSelf="right" textAlign="right">
          {titleArr[0]}
        </Heading>
        <Heading w="100%" pos="relative" top="-8rem" fontFamily="Brant" as="h1" fontSize="3rem" my={6} textAlign="right"
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontWeight="extrabold"
        >
          {titleArr[1]}
        </Heading>
      </Box>
      {children}
    </VStack>
  );
};

export default PageContainer;
