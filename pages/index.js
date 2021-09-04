import { Heading, Box, Grid, Flex } from '@chakra-ui/react';
import PageContainer from '@/layouts/PageContainer';
import Actions from '@/modules/Actions';


export default function Home() {
  return (
    <PageContainer title="Color/Func">
      <Flex flexDirection="column" minHeight="94vh">
        <Grid w="100%" justifyContent="center" alignItems="center">
          <Box pos="relative" display="inline-block">
            <Heading fontFamily="Coves" as="h1" fontSize={["10rem", "10rem", "23rem"]} my={10} textShadow="0px 0px var(--chakra-colors-blackAlpha-300)">
              Color
            </Heading>
            <Box pos="absolute" display="inline-block" bottom={["0px"]} left="30%">
              <Heading
                fontFamily="Brant" as="h1" fontSize={["5rem", "5rem", "10rem"]}
                color='blackAlpha.800'
                _before={{
                  bgGradient: "linear(to-l, #7928CA,#FF0080)", bgClip: "text",
                  content: "'Func'",
                  position: 'absolute',
                  left: 0,
                  top: .5,
                }}
              >
                Func
              </Heading>
            </Box>
          </Box>
        </Grid>
        <Grid flex="1" w="100%" justifyContent="center" alignItems="baseline">
          <Actions switchName="Get Started!" />
        </Grid>
      </Flex>
    </PageContainer>
  );
}
