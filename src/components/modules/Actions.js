import { useRouter } from 'next/router';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { motion } from "framer-motion"

import ColorModeButton from 'src/components/elements/ColorModeButton';

const Actions = ({ switchName }) => {
  const router = useRouter();

  let actions = (
    <>
      <ColorModeButton />
      <MotionButton
        whileHover={{ scale: 1.1 }}
        animate={{scale : 1}}

        rightIcon={<FaAngleRight />}
        onClick={() =>
          router.push(switchName === 'Editor' ? '/editor' : '/')
        }
      >
        {switchName}
      </MotionButton>
    </>
  );

  if (switchName === 'First Page') {
    actions = (
      <>
        <MotionButton
          whileHover={{ scale: 1.1 }}
          animate={{scale : 1}}

          leftIcon={<FaAngleLeft />}
          onClick={() =>
            router.push(switchName === 'Editor' ? '/editor' : '/')
          }
        >
          {switchName}
        </MotionButton>
        <ColorModeButton />
      </>
    );
  }

  return <ButtonGroup>{actions}</ButtonGroup>;
};

export default Actions;

const MotionButton = motion(Button);