import { useRouter } from 'next/router';
import { useColorMode, Box } from '@chakra-ui/react';

import SVGLogo from '@/elements/SVGLogo'


const PageContainer = ({ children, title, ...props }) => {
  const { pathname } = useRouter();
  const titleArr = title.split("/");

  switch (pathname) {
    default: return (
      <ContainerWithLogo className="container" {...props}>
        <SVGLogo title={titleArr} position="absolute" top="5" left="5" />
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
      bg={colorMode === 'light' ? 'white' : 'gray.900'}
      transition="background 100ms linear"
      {...props}
    >
      {logo}
      {children}
    </Box>
  )
}

