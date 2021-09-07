// import create from "zustand"
import create from 'zustand-store-addons' // -- Zustand-store-addons extends zustand with computations
import produce from "immer"
import { devtools } from 'zustand/middleware';
import { pipe } from "ramda"


import Color from 'color';
import { genHues } from "@/utils/colors";


// ? See https://github.com/pmndrs/zustand#middleware
const immer = config => (set, get, api) => config((partial, replace) => {
  const nextState = typeof partial === 'function'
      ? produce(partial)
      : partial
  return set(nextState, replace)
}, get, api)


// Todo: Add persist
// ? See https://github.com/pmndrs/zustand/discussions/224
const createStore = pipe(devtools, immer, create)


const useStore = createStore(
  (set) => ({
    hex: "#FF8C6B",
    setHex: (hex) => set(state => void(state.hex = hex)),

    scheme: 'Monochromatic',
    setScheme: (scheme) => set(state => void(state.scheme = scheme)),

    loop: 3,
    setLoop: (loop) => set(state => (state.loop = loop)),

    brightFunc: 'x * 10',
    setBrightFunc: (brightFunc) => set(state => (state.brightFunc = brightFunc)),

    satFunc: 'abs(x-1) * 10',
    setSatFunc: (satFunc) => set(state => (state.satFunc = satFunc)),

    id: 'x*100',
    setId: (id) => set(state => (state.id = id)),

  }), {
    computed: {
      startingColor() {
        return Color(this.startingHex)
      },
      hues() {
        return genHues({ startingColor: this.startingColor, colorScheme: this.colorScheme })
      }
    }
  })

export default useStore;