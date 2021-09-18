import { useColorMode, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Logo from '@/elements/Logo'

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
      bg={colorMode === 'light' ? 'white' : 'gray.900'}
      transition="background 100ms linear"
      {...props}
    >
      {logo}
      {children}
    </Box>
  )
}

