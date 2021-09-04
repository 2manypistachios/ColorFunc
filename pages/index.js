import { Heading, Box, Grid } from '@chakra-ui/react';
import PageContainer from '@/layouts/PageContainer';
import Actions from '@/modules/Actions';


export default function Home() {
  return (
    <PageContainer title="Color/Func">
      <Grid display="inline-grid" w="100%" justifyContent="center">
        <Box pos="relative">
          <Heading fontFamily="Coves" as="h1" fontSize={["10rem","10rem","23rem"]} my={6} textShadow="0px 0px var(--chakra-colors-blackAlpha-300)">
            Color
          </Heading>
          <Heading pos="relative" display="inline-block" top={["-110px","-110px","-190px"]} left="30%"
            fontFamily="Brant" as="h1" fontSize={["5rem", "5rem", "10rem"]}
            color= 'blackAlpha.800'
            _before={{
              bgGradient: "linear(to-l, #7928CA,#FF0080)", bgClip: "text",
              content: "'Func'",
              position: 'absolute',
              left: .5,
              top: -.5,
            }}
          >
            Func
          </Heading>
        </Box>
        <Actions switchName="Get Started!" />
      </Grid>
    </PageContainer>
  );
}
