// import ErrorBoundary from "@/elements/ErrorBoundary"
// import Wrapper from "@/layouts/Wrapper"
import { Flex, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Grid } from "@chakra-ui/react"

import { useRecoilValue } from "recoil";
import { huesState, loopState, brightFuncState, satFuncState } from "@/components/state";

import PageContainer from "@/layouts/PageContainer"
import ColorList from "@/elements/ColorList"
import JsonAccordion from "@/modules/JsonAccordion"
import Shades from "@/modules/Shades"

import Hues from "@/modules/Hue"
import Saved from "@/modules/Saved"
import Actions from "@/modules/Actions"
import { genShades } from "@/utils/colors"



export default function ColorPage() {
  const hues = useRecoilValue(huesState)
  const loop = useRecoilValue(loopState)
  const brightFunc = useRecoilValue(brightFuncState)
  const satFunc = useRecoilValue(satFuncState)

  const subColors = genShades(hues, { loop, brightFunc, satFunc })

  return (
      <PageContainer title="C/F">
        <Grid flex="1" w="100%" py="33px" justifyContent="center" alignItems="baseline">
          <Actions switchName="Home" />
        </Grid>
      <Flex pt="100px">
        <Flex pos="sticky" top="0px" w="40%" display="grid" align="center" justify="center" flex="4" alignSelf="start">
          <Tabs>
            <TabList>
              <Tab>Hue</Tab>
              <Tab>Shades</Tab>
              <Tab>Exports</Tab>
              <Tab>Saved</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Hues/>
              </TabPanel>
              <TabPanel>
                <Shades/>
              </TabPanel>
              <TabPanel>
                <JsonAccordion subColors={subColors} />
              </TabPanel>
              <TabPanel>
                <Saved />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>

        <Box flex="6">
          <ColorList subColors={subColors} />
        </Box>
      </Flex>
      </PageContainer>
  )
}

