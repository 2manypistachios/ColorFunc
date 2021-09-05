import { genHues } from "@/utils/colors";

const { atom, selector } = require("recoil")
const Color = require('color');

const startingColorState = atom({
  key: 'primaryState',
  default: Color("#FF8C6B")
})

const colorSchemeState = atom({
  key: 'colorSchemeState',
  default: 'Monochromatic'
})

const loopState = atom({
  key: 'loopState',
  default: 3
})

const brightFuncState = atom({
  key: 'brightFuncState',
  default: 'x * 10'
})

const satFuncState = atom({
  key: 'satFuncState',
  default: 'abs(x-1) * 10'
})

const idFuncState = atom({
  key: 'satFuncState',
  default: 'abs(x-1) * 10'
})

const huesState = selector({
  key: 'huesState',
  get: ({ get }) => {
    const startingColor = get(startingColorState);
    const colorScheme = get(colorSchemeState);
    return genHues({ startingColor, colorScheme })
  }
})

export {startingColorState, colorSchemeState, loopState, brightFuncState, satFuncState, huesState}