import { Button, useColorMode } from '@chakra-ui/react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

export default function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      leftIcon={colorMode === 'light' ? <FaRegMoon /> : <FaRegSun />}
      onClick={toggleColorMode}
    >
      {colorMode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  )
}