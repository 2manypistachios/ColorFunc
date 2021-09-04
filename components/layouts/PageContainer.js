import { Heading, useColorMode, Box, AspectRatio } from '@chakra-ui/react';
import { useRouter } from 'next/router';
// import Footer from '../modules/Footer';

const PageContainer = ({ children, title, ...props }) => {
  const { pathname } = useRouter();

  const titleArr = title.split("/");

  switch (pathname) {
    default: return (
      <ContainerWithLogo className="container" {...props}>
        <Logo title={titleArr} />
        {children}
      </ContainerWithLogo>
    )
    case '/': return (
      <ContainerWithLogo {...props}>
        {children}
      </ContainerWithLogo>
    )
  }
};

export default PageContainer;


const ContainerWithLogo = ({ logo, children, ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      transition="background 100ms linear"
      {...props}
    >
      {logo}
      {children}
    </Box>
  )
}

const Logo = ({ title }) => {
  console.log("wtf", title)

  return (
    <AspectRatio w="130px" ratio={1 / 1} pos="relative" display="inline-block" top="20" left="20">
      <Box pos="relative" display="inline-block">
        <Heading fontFamily="Coves" as="h1" fontSize="10rem" my={10} lineHeight="1">
          {title[0]}
        </Heading>
        <Box pos="absolute" display="inline-block" top="50%" left="50%">
          <Heading
            fontFamily="Brant" as="h1" fontSize="4rem"
            color='blackAlpha.800'
            _before={{
              bgGradient: "linear(to-l, #7928CA,#FF0080)", bgClip: "text",
              content: "'F'",
              position: 'absolute',
              left: 0,
              top: 0,
            }}
          >
            {title[1]}
          </Heading>
        </Box>
      </Box>
    </AspectRatio>
  )
}