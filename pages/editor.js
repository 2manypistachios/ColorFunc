// import ErrorBoundary from "@/elements/ErrorBoundary"
// import Wrapper from "@/layouts/Wrapper"
import { Flex, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Grid } from "@chakra-ui/react"

import ColorList from "@/elements/ColorList"
import PageContainer from "@/layouts/PageContainer"
import JsonAccordion from "@/modules/JsonAccordion"
import Shades from "@/modules/Shades"
import Hues from "@/modules/Hue"
import Saved from "@/modules/Saved"
import Actions from "@/modules/Actions"
import { genTones } from "@/utils/colors"
import useStore from "@/store/useStore";


export default function ColorPage() {
  const [hues, loop, brightFunc, satFunc] = useStore('hues, loop, brightFunc, satFunc')
  const subColors = genTones(hues, { loop, brightFunc, satFunc })

  console.log("sub:", subColors)

  return (
    <PageContainer title="C/F" minH="100vh">
      <Grid flex="1" w="100%" py="33px" justifyContent="center" alignItems="baseline">
        <Actions switchName="Home" />
      </Grid>
      <Flex pt="100px" wrap="wrap">
        <Flex pos="relative" top="0px" minW="400px" display="grid" align="center" justify="center" flex="2" alignSelf="start">
          <Tabs w="300px">
            <TabList>
              <Tab>Hue</Tab>
              <Tab>Shades</Tab>
              <Tab>Exports</Tab>
              <Tab>Saved</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Hues />
              </TabPanel>
              <TabPanel>
                <Shades />
              </TabPanel>
              <TabPanel>
                {/* <JsonAccordion subColors={subColors} /> */}
              </TabPanel>
              <TabPanel>
                <Saved />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>

        <Box flex="3">
          <ColorList subColors={subColors} />
        </Box>
      </Flex>
    </PageContainer>
  )
}

