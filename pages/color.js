const Color = require('color');

import { useState, useEffect } from "react"

import { Flex, Box, Heading, Text, Wrap, WrapItem, Center } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

import ErrorBoundary from "@/elements/ErrorBoundary"
import ColorList from "@/elements/ColorList"
import PageContainer from "@/layouts/PageContainer"
import Wrapper from "@/layouts/Wrapper"

import JsonAccordion from "@/modules/JsonAccordion"
import Shades from "@/modules/Shades"
import Hues from "@/modules/Hue"
import Saved from "@/modules/Saved"
import Actions from "@/modules/Actions"

import { genShades } from "@/utils/colors"

import { useRecoilState, useRecoilValue } from "recoil";
import { huesState, loopState, brightFuncState, satFuncState } from "@/components/state";

export default function ColorPage() {
  const hues = useRecoilValue(huesState)
  const loop = useRecoilValue(loopState)
  const brightFunc = useRecoilValue(brightFuncState)
  const satFunc = useRecoilValue(satFuncState)

  const subColors = genShades(hues, { loop, brightFunc, satFunc })

  return (
      <PageContainer title="C/F">
      <Actions switchName="Home" />
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

