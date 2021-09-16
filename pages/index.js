import { Container, Heading, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
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

const SvgLogo = ({ ...props }) => (
  <Icon width="27.632px" height="35.53px" viewBox="0 0 27.632 35.53" {...props}>
    <g transform="translate(-40.042 -45.304)" fill="#000000" strokeWidth=".26458">
      <text x="38.03941" y="80.83374" fontFamily="sans-serif" fontSize="50.8px"><tspan x="38.03941" y="80.83374" fontFamily="Coves" fontSize="50.8px" fontWeight="bold" strokeWidth=".26458">C</tspan></text>
      <text x="51.209511" y="79.788559" fontFamily="brant" fontSize="22.578px" fontWeight="bold"><tspan x="51.209511" y="79.788559" fontFamily="brant" fontSize="22.578px" fontWeight="bold" strokeWidth=".26458">F</tspan></text>
    </g>
  </Icon>
)

