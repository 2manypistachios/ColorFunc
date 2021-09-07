import create from 'zustand-store-addons' // -- Zustand-store-addons extends zustand with computations
import produce from "immer"
import { devtools } from 'zustand/middleware'; // -- Redux Dev tools

// -- Color Functionality
import Color from 'color';
import { genHues } from "@/utils/colors";


// * Immer wraps around setter and getter for immutability shortcut
// ? See https://github.com/pmndrs/zustand#middleware
const immer = config => (set, get, api) => config((partial, replace) => {
  const nextState = typeof partial === 'function'
    ? produce(partial)
    : partial
  return set(nextState, replace)
}, get, api)


// -- Following suggested practices by Zustand
// ? See https://github.com/pmndrs/zustand#middleware
/* eslint
  no-void: "off",
  no-param-reassign: "off",
  no-return-assign: "off",
*/

const useStore = create(
  (set) => ({
    hex: "#FF8C6B",
    setHex: (hex) => set(state => void(state.hex = hex)),

    scheme: 'Monochromatic',
    setScheme: (scheme) => set(state => void(state.scheme = scheme)),

    loop: 3,
    setLoop: (loop) => set(state => void(state.loop = loop)),

    brightFunc: 'x * 10',
    setBrightFunc: (brightFunc) => set(state => void(state.brightFunc = brightFunc)),

    satFunc: 'abs(x-1) * 10',
    setSatFunc: (satFunc) => set(state => void(state.satFunc = satFunc)),

    id: 'x*100',
    setId: (id) => set(state => void(state.id = id)),

    setHues: (hues) => set(state => void(state.hues = hues))
  }), {
  computed: {
    startingColor() {
      return Color(this.hex)
    },
    hues() {
      return genHues({ startingColor: this.startingColor, colorScheme: this.scheme })
    }
  },
  middleware: [devtools, immer],
  settings: {
    name: 'ColorStore'
  }
})


export default useStore;