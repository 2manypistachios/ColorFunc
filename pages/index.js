import PageContainer from '@/layouts/PageContainer';
import Actions from '@/modules/Actions';

import { Heading, Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <PageContainer title="C/F">
      <Box w="100%" pos="relative" overflow="visible" h="80vh">
        <Heading w="80%" pos="relative" fontFamily="Coves" as="h1" fontSize="25rem" my={6} alignSelf="right" textAlign="right">
          Color
        </Heading>
        <Heading w="75%" pos="relative" top="-210px" fontFamily="Brant" as="h1" fontSize="10rem" my={6} textAlign="right"
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Func
        </Heading>
      </Box>
      <Actions switchName="Get Started!" />
    </PageContainer>
  );
}
