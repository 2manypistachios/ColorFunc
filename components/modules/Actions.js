import { useRouter } from 'next/router';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import ColorModeButton from '@/elements/ColorModeButton';

const Actions = ({ switchName }) => {
  const router = useRouter();

  let actions = (
    <>
      <ColorModeButton />
      <Button
        rightIcon={<FaAngleRight />}
        onClick={() =>
          router.push(switchName === 'Editor' ? '/editor' : '/')
        }
      >
        {switchName}
      </Button>
    </>
  );

  if (switchName === 'First Page') {
    actions = (
      <>
        <Button
          leftIcon={<FaAngleLeft />}
          onClick={() =>
            router.push(switchName === 'Editor' ? '/editor' : '/')
          }
        >
          {switchName}
        </Button>
        <ColorModeButton />
      </>
    );
  }

  return <ButtonGroup>{actions}</ButtonGroup>;
};

export default Actions;
