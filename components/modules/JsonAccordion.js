import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react"

export default function JsonAccordion({ subColors }) {
  // See https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map
  function replacer(key, val) {
    if (val instanceof Map) {
      let returnObj = {}

      for (const [mapKey, mapVal] of val) {
        returnObj[mapKey] = mapVal.hex
      }

      return returnObj;
    } else {
      return val;
    }
  }

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              JSON Export
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <pre>
            {JSON.stringify(subColors, replacer, " ")}
          </pre>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}