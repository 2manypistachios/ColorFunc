import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react"

function jsonReplacer(key, val) {
  if (typeof val[0] === "object") {
    const returnObj = {}
    
    val[0].tones.forEach(tone => {
      returnObj[tone.id] = tone.toHex()
    });

    return returnObj;
  }
  return val;
}

function cssReplacer(val,) {
  if (typeof val === "object") {
    let returnStr = ''

    val.tones.forEach(tone => {
      returnStr += `--${val.group}-${tone.id}: ${tone.toHex()}; \n`
    })

    return returnStr;
  }
  return '';
}

export default function JsonAccordion({ subColors }) {
  const cssVars = subColors.map(cssReplacer)

  return (
    <>
      <Accord title="CSS Export">{cssVars}</Accord>
      <Accord title="JSON Export">{JSON.stringify(subColors, jsonReplacer, " ")}</Accord>
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