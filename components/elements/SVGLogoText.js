import {Icon, useColorModeValue, useToken } from '@chakra-ui/react';
import { LinearGradient } from '@visx/gradient';

const SvgLogoText = ({ size = 1, colors = ['#351CAB', '#621A61'], ...props }) => {
  const chakraColors = useToken("colors", ['gray.800', 'bright', 'blackAlpha.900', ...colors])
  const bg = useColorModeValue(chakraColors[0], chakraColors[1])

  return (
    <Icon width={`${size}%`} height={`${size * 103.25 / 223.26}%`} viewBox="0 0 59.07 27.319" {...props}>
      <g transform="translate(-44.105 -36.628)" fontFamily="sans-serif" strokeWidth=".26458">
        <LinearGradient id="FuncBG" from={chakraColors[3]} to={chakraColors[4]} rotate="-45"/>
        <text x="42.992031" y="56.40239" fill={bg} fontSize="28.222px"><tspan x="42.992031" y="56.40239" fontFamily="Coves" fontSize="28.222px" fontWeight="bold" strokeWidth=".26458">Color</tspan></text>
        <text x="61.518898" y="63.802979" fill={chakraColors[2]} fontSize="12.7px"><tspan x="61.518898" y="63.802979" fontFamily="Brant" fontSize="12.7px" fontWeight="600" strokeWidth=".26458">Func</tspan></text>
        <text x="61.980068" y="63.879738" fill={`url(#FuncBG)`} fontSize="12.7px"><tspan x="61.980068" y="63.879738" fontFamily="Brant" fontSize="12.7px" fontWeight="600" strokeWidth=".26458">Func</tspan></text>
      </g>
    </Icon>
  )
}

export default SvgLogoText