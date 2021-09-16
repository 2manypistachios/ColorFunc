import { Heading, Container, Box, Grid, Flex, Icon, Text, SimpleGrid, GridItem, Stack, chakra, useColorModeValue, useToken } from '@chakra-ui/react';
import PageContainer from '@/layouts/PageContainer';
import Actions from '@/modules/Actions';

import CircleShift from '@/components/elements/CircleShift';
import Features from '@/elements/Features'
import Demo from '@/elements/Demo'
import LatestPalattes from '@/elements/LatestPalattes'

export default function Home() {
  return (
    <PageContainer title="Color/Func">
      <Flex flexDirection="row" minHeight="94vh" wrap="wrap-reverse" bg={useColorModeValue('gray.50', 'gray.900')}>
        <Flex flex="1" flexDirection="column" alignItems="center" justifyContent="space-around">
          <SvgLogoText size={80} />
          <Container width="50ch">
            <Heading mb="1rem">Functional Color Design.</Heading>
            <Text>Express your theme in one simple equation.</Text>
          </Container>
          <Actions switchName="Editor" />
        </Flex>
        <Flex flex="1" alignItems="center" justifyContent="center">
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

const SvgLogoText = ({ size = 1, colors, ...props }) => {
  const chakraColors = useToken("colors", ['gray.800', 'bright', 'blackAlpha.800', colors])
  const bg = useColorModeValue(chakraColors[0], chakraColors[1])

  return (
    <Icon width={`${size}%`} height={`${size * 103.25 / 223.26}%`} viewBox="0 0 59.07 27.319" {...props}>
      <g transform="translate(-44.105 -36.628)" fontFamily="sans-serif" strokeWidth=".26458">
        <text x="42.992031" y="56.40239" fill={bg} fontSize="28.222px"><tspan x="42.992031" y="56.40239" fontFamily="Coves" fontSize="28.222px" fontWeight="bold" strokeWidth=".26458">Color</tspan></text>
        <text x="61.518898" y="63.802979" fill={chakraColors[2]} fontSize="12.7px"><tspan x="61.518898" y="63.802979" fontFamily="Brant" fontSize="12.7px" fontWeight="600" strokeWidth=".26458">Func</tspan></text>
        <text x="61.980068" y="63.879738" fill={bg} fontSize="12.7px"><tspan x="61.980068" y="63.879738" fontFamily="Brant" fontSize="12.7px" fontWeight="600" strokeWidth=".26458">Func</tspan></text>
      </g>
    </Icon>
  )
}