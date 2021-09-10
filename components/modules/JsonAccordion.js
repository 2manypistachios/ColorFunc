import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react"

function jsonReplacer(json) {
  let returnObj = {}
  json.forEach((val) => {
    let subGroup = {}
    val.tones.forEach(tone => {
      subGroup[tone.id] = tone.toHex()
    })
    returnObj[val.group] = subGroup;
  })
  return returnObj
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
  const jsonVars = jsonReplacer(subColors)

  console.log(jsonVars)

  return (
    <>
      <Accord title="CSS Export">{cssVars}</Accord>
      <Accord title="JSON Export">{JSON.stringify(jsonVars, null, ' ')}</Accord>
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