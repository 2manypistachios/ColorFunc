import { Container, Heading, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import PageContainer from '@/layouts/PageContainer';
import Actions from '@/modules/Actions';

import CircleShift from '@/components/elements/CircleShift';
import Features from '@/elements/Features'
import Demo from '@/elements/Demo'
import LatestPalattes from '@/elements/LatestPalattes'
import SvgLogoText from '@/components/elements/SVGLogoText';

export default function Home() {
  return (
    <PageContainer title="Color/Func">
      <Flex flexDirection="row" minHeight="94vh" wrap="wrap-reverse" bg={useColorModeValue('gray.50', 'gray.900')}>
        <Flex flex="1" flexDirection="column" alignItems="center" justifyContent="space-around">
          <SvgLogoText size={90} />
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
      <LatestPalattes />
    </PageContainer>
  );
}