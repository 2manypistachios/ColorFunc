import useStore from "src/store/useStore"

// Not a real hook
const SetSiteSnippet = ({ hex, harmony, loop, brightFunc, satFunc }) => {
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

export default SetSiteSnippet;