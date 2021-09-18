import Router from 'next/router';

import { DefaultSeo } from 'next-seo';
import { UserProvider } from "@auth0/nextjs-auth0";

import { Box, ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import NProgress from 'nprogress';

import SEO from 'next-seo.config';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/styles';
import '@/styles/css/nprogress.css';
import Footer from '@/layouts/Footer';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MotionBox = motion(Box);

function MyApp({ Component, pageProps, router }) {
  return (
    <UserProvider>
      <ChakraProvider resetCSS theme={theme}>
        <DefaultSeo {...SEO} />

        <GlobalStyle>
          <AnimatePresence exitBeforeEnter>
            <MotionBox
              key={router.route}
              animate="enter"
              as="main"
              exit="exit"
              flexGrow={1}
              initial="initial"
              variants={{
                initial: { opacity: 0, y: -10 },
                enter: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 10 },
              }}
            >
              <Component {...pageProps} />
              <Footer />
            </MotionBox>
          </AnimatePresence>
        </GlobalStyle>
      </ChakraProvider>
    </UserProvider>
  );
}

export default MyApp;
