import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react"

function jsonReplacer(key, val) {
  if (val instanceof Map) {
    const returnObj = {}
    for (const [mapKey, mapVal] of val) {
      returnObj[mapKey] = mapVal.hex
    }

    return returnObj;
  }
  return val;
}

function cssReplacer(val, key) {
  if (val[1] instanceof Map) {
    let returnStr = ''

    for (const [mapKey, mapVal] of val[1]) {
      returnStr += `--${val[0]}-${mapKey}: ${mapVal.hex}; \n`
    }

    return returnStr;
  }
}

export default function JsonAccordion({ subColors }) {
  // See https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map
  console.log('subcolors: ', subColors, )
  const cssVars = Object.entries(subColors).map(cssReplacer)
  return (
    <>
      <Accord title="CSS Export" children={cssVars} />
      <Accord title="JSON Export" children={JSON.stringify(subColors, jsonReplacer, " ")} />
    </>
  )
}

const Accord = ({ title, children }) => (
  <Accordion allowToggle>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <pre>
          {children}
        </pre>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
)