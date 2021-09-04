import { Heading, useColorMode, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Footer from '../modules/Footer';

const PageContainer = ({ children, title }) => {
  const { pathname } = useRouter();

  const titleArr = title.split("/");

  switch (pathname) {
    default: return (
      <ContainerWithLogo>
        <Logo title={titleArr} />
        {children}
        <Footer />
      </ContainerWithLogo>
    )
    case '/': return (
      <ContainerWithLogo>
        {children}
        <Footer />
      </ContainerWithLogo>
    )
  }
};

export default PageContainer;


const ContainerWithLogo = ({ logo, children, ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      overflow="hidden"
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      transition="background 100ms linear"
      {...props}
    >
      {logo}
      {children}
    </Box>
  )
}

const Logo = ({ title }) => (
  <Box w="5%" pos="absolute" top="0" left="4" overflow="visible">
    <Heading pos="relative" fontFamily="Coves" as="h1" fontSize="8rem" alignSelf="right" textAlign="right">
      {title[0]}
    </Heading>
    <Heading w="100%" pos="relative" top="-8rem" fontFamily="Brant" as="h1" fontSize="3rem" my={6} textAlign="right"
      bgGradient="linear(to-l, #7928CA,#FF0080)"
      bgClip="text"
      fontWeight="extrabold"
    >
      {title[1]}
    </Heading>
  </Box>
)
