import { Button, useColorMode } from '@chakra-ui/react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import { motion } from "framer-motion"

export default function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <MotionButton
      whileHover={{ scale: 1.1 }}
      animate={{scale : 1}}

      leftIcon={colorMode === 'light' ? <FaRegMoon /> : <FaRegSun />}
      onClick={toggleColorMode}
    >
      {colorMode === 'light' ? 'Dark' : 'Light'} Mode
    </MotionButton>
  )
}

const MotionButton = motion(Button)