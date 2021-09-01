import { HStack, Link, useColorMode } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Star = () => {
  const { colorMode } = useColorMode();

  return (
    <Link href="https://github.com/hendraaagil/next-chakra-starter" isExternal>
      <HStack
        zIndex="docked"
        pos="fixed"
        py={3}
        px={4}
        bg={colorMode === 'light' ? 'white' : 'gray.800'}
        borderBottomWidth="3px"
        borderRightWidth="3px"
        borderColor={colorMode === 'light' ? 'white' : 'gray.100'}
        roundedBottomRight="3xl"
      >
        <FaGithub size="24px" />
      </HStack>
    </Link>
  );
};

export default Star;
