// import ErrorBoundary from "@/elements/ErrorBoundary"
// import Wrapper from "@/layouts/Wrapper"
import { Flex, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Grid } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"

import ColorList from "@/elements/ColorList"
import PageContainer from "@/layouts/PageContainer"
import JsonAccordion from "@/modules/editor/JsonAccordion"
import Shades from "@/modules/editor/Shades"
import Hues from "@/modules/editor/Hue"
import Saved from "@/modules/editor/Saved"
import Actions from "@/elements/Actions"
import { genTones } from "@/utils/colors"
import useStore from "@/store/useStore";


export default function ColorPage() {
  const [hues, loop, brightFunc, satFunc] = useStore('hues, loop, brightFunc, satFunc')
  const subColors = genTones(hues, { loop, brightFunc, satFunc })

  return (
    <PageContainer title="C/F" minH="100vh">
      <Grid flex="1" w="100%" py="33px" justifyContent="center" alignItems="baseline">
        <Actions switchName="Home" />
      </Grid>
      <Flex pt="100px" wrap="wrap">
        <Flex pos="relative" top="0px" minW="400px" display="grid" align="center" justify="center" flex="2" alignSelf="start">
          <Tabs w="300px" isLazy>
            <TabList>
              <Tab>Hue</Tab>
              <Tab>Shades</Tab>
              <Tab>Exports</Tab>
              <Tab>Saved</Tab>
            </TabList>

            <AnimatePresence>
              <TabPanels>
                <TabPanel>
                  <MotionBox key="hues" {...MotionProps}>
                    <Hues />
                  </MotionBox>
                </TabPanel>
                <TabPanel>
                  <MotionBox key="shades" {...MotionProps}>
                    <Shades />
                  </MotionBox>
                </TabPanel>
                <TabPanel>
                  <MotionBox key="jsonAccordion" {...MotionProps}>
                    <JsonAccordion subColors={subColors} />
                  </MotionBox>
                </TabPanel>
                <TabPanel>
                  <MotionBox key="saved" {...MotionProps}>
                    <Saved />
                  </MotionBox>
                </TabPanel>
              </TabPanels>
            </AnimatePresence>
          </Tabs>
        </Flex>

        <Box flex="3">
          <ColorList subColors={subColors} />
        </Box>
      </Flex>
    </PageContainer>
  )
}

const MotionProps = {
  initial: { x: 300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 }
};


const MotionBox = motion(Box)