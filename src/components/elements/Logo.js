import Link from 'next/link';
import { useColorMode, Box } from '@chakra-ui/react'
import { Text } from '@visx/text';
import { ParentSize } from '@visx/responsive'
import { LinearGradient } from '@visx/gradient'


const Logo = ({ title, ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <Link href="/" passHref>
      <Box id="logo-warpper" pos="absolute" top="0" left="0px" w="100px" h="100px" {...props}>
        <ParentSize className="graph-container" debounceTime={10} >
          {({ width: visWidth, height: visHeight }) => (
            <svg width={visWidth} height={visHeight} viewBox="0 0 100 100" id="blobSvg" enableBackground="false">
              <LinearGradient id="funkycolor" from="#7928CA" to="#FF0080" />
              <Text x={visWidth / 2} y={visHeight / 2} fill={colorMode === 'light' ? '--chakra-vars-gray-800' : 'white'} verticalAnchor="middle" textAnchor="middle" fontSize="7rem">{title[0]}</Text>
              <Text x={visWidth / 2 + 4} y={visHeight / 2 * 1} fill='--chakra-vars-blackAlpha-800' verticalAnchor="middle" textAnchor="middle" fontSize="3rem" fontFamily="Brant" fontWeight="900">{title[1]}</Text>
              <Text x={visWidth / 2 + 5} y={visHeight / 2 * 1} fill='url(#funkycolor)' verticalAnchor="middle" textAnchor="middle" fontSize="3rem" fontFamily="Brant" fontWeight="900">{title[1]}</Text>
            </svg>
          )}
        </ParentSize>
      </Box>
    </Link>
  )
}

export default Logo;