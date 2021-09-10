import create from 'zustand-store-addons'; // -- Zustand-store-addons extends zustand with computations
import produce from 'immer';
import { devtools } from 'zustand/middleware'; // -- Redux Dev tools
import { State } from 'zustand';

// -- Color Functionality
import { Colord, colord, extend } from 'colord';
import xyzPlugin from 'colord/plugins/xyz';
import harmoniesPlugin, { HarmonyType } from '@/utils/harmonies';
extend([xyzPlugin, harmoniesPlugin]);
import { genHarmony } from '@/utils/colors';


// -- Math Types
import { MathExpression } from 'mathjs';

// * Immer wraps around setter and getter for immutability shortcut
// ? See https://github.com/pmndrs/zustand#middleware
const immer = (config) => (set, get, api) =>
  config(
    (partial, replace) => {
      const nextState =
        typeof partial === 'function' ? produce(partial) : partial;
      return set(nextState, replace);
    },
    get,
    api
  );

// -- Following suggested practices by Zustand
// ? See https://github.com/pmndrs/zustand#middleware
/* eslint
  no-void: "off",
  no-param-reassign: "off",
  no-return-assign: "off",
*/

interface ColorState extends State {
  hex: string;
  setHex: (hex: string) => void;
  
  harmony: HarmonyType;
  setHarmony: (harmony: HarmonyType) => void;
  
  loop: number;
  setLoop: (loop) => void;

  brightFunc: MathExpression;
  setBrightFunc: (brightFunc: MathExpression) => void;

  satFunc: MathExpression;
  setSatFunc: (satFunc: MathExpression) => void;

  id: MathExpression;
  setId: (id: MathExpression) => void;
}

const useStore = create<ColorState>(
  (set) => ({
    hex: '#FF8C6B',
    setHex: (hex) => set((state) => void (state.hex = hex)),

    harmony: 'analogous',
    setHarmony: (harmony) => set((state) => void (state.harmony = harmony)),

    loop: 3,
    setLoop: (loop) => set((state) => void (state.loop = loop)),

    brightFunc: 'x * 10',
    setBrightFunc: (brightFunc) =>
      set((state) => void (state.brightFunc = brightFunc)),

    satFunc: 'abs(x-1) * 10',
    setSatFunc: (satFunc) => set((state) => void (state.satFunc = satFunc)),

    id: 'x*100',
    setId: (id) => set((state) => void (state.id = id)),
  }),
  {
    computed: {
      startingColor() {
        return colord(this.hex);
      },
      hues() {
        return genHarmony({
          startingColor: this.startingColor,
          harmony: this.harmony,
        });
      },
    },
    middleware: [devtools, immer],
    settings: {
      name: 'ColorStore',
    },
  }
);

export default useStore;
