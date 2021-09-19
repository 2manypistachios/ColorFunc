
import { Icon, useToken, useColorModeValue } from "@chakra-ui/react"
import Link from "next/link"


const SvgLogo = ({ size=5, colors=['blackAlpha.900', 'bright'], ...props }) => {
  const chakraColors = useToken("colors", colors)
  const bg = useColorModeValue(chakraColors[0], chakraColors[1])

  const ratio = 35.53 / 27.632
  const clamp = [3,5]

  return (
  <Link href="/" passHref>
  <Icon width={`clamp(${clamp[0]}rem, ${size}vw, ${clamp[1]}rem)`} height={`clamp(${clamp[0]*ratio}rem, ${size * ratio }vw, ${clamp[1] * ratio}rem)`} viewBox="0 0 27.632 35.53" {...props}>
    <g transform="translate(-40.042 -45.304)" fill={bg} strokeWidth=".26458">
      <text x="38.03941" y="80.83374" fontFamily="sans-serif" fontSize="50.8px"><tspan x="38.03941" y="80.83374" fontFamily="Coves" fontSize="50.8px" fontWeight="bold" strokeWidth=".26458">C</tspan></text>
      <text x="51.209511" y="79.788559" fontFamily="brant" fontSize="22.578px" fontWeight="bold"><tspan x="51.209511" y="79.788559" fontFamily="brant" fontSize="22.578px" fontWeight="bold" strokeWidth=".26458">F</tspan></text>
    </g>
  </Icon>
  </Link>
  )
}

export default SvgLogo