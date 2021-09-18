import { Container, Heading, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import PageContainer from '@/layouts/PageContainer';
import Actions from '@/modules/Actions';

import CircleShift from '@/elements/CircleShift';
import Features from '@/elements/Features'
import Demo from '@/elements/Demo'
import LatestPalattes from '@/modules/snippets/LatestPalattes'
import SvgLogoText from '@/elements/SVGLogoText';
import { getPublicSnippets } from '@/utils/fauna';

export default function Home({ snippets }) {
  return (
    <PageContainer title="Color/Func">
      <Flex flexDirection="row" minHeight="94vh" wrap="wrap-reverse" bg={useColorModeValue('gray.50', 'gray.900')}>
        <Flex flex="1" flexDirection="column" alignItems="center" justifyContent="space-around">
          <SvgLogoText size={90} colors={useColorModeValue(['blue.500','purple.500'],['blue.400','purple.500'])} />
          <Container textAlign="center">
            <Heading mb="1rem">Functional Color Design.</Heading>
            <Text>Express your theme in one simple equation.</Text>
          </Container>
          <Actions switchName="Editor" />
        </Flex>
        <Flex flex="1" minW="300px" minH="400px" alignItems="center" justifyContent="center">
          <CircleShift bg={useColorModeValue('gray.50', 'gray.900')} />
        </Flex>
      </Flex>
      <Features />
      <Demo />
      {snippets && <LatestPalattes snippets={snippets} />}
    </PageContainer>
  );
}

export async function getStaticProps() {
  try {
    const snippets = await getPublicSnippets()
    return { props: {snippets} }
  } catch (err) {
    console.warn(err)
    return { notFound: false }
  }
}


