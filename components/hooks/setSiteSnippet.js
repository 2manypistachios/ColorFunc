import useStore from "@/store/useStore"
import { useEffect } from "react";

// Not a real hook
const setSiteSnippet = ({ hex, harmony, loop, brightFunc, satFunc }) => {
  const [setHex, setHarmony, setLoop, setBrightFunc, setSatFunc] = useStore('setHex, setHarmony, setLoop, setBrightFunc, setSatFunc')

  const changeAlgo = () => {
    setHex(hex);
    setHarmony(harmony)
    setLoop(loop)
    setBrightFunc(brightFunc)
    setSatFunc(satFunc)
  }

  return changeAlgo;
}

export default setSiteSnippet;