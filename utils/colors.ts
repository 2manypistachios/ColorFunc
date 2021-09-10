import { compile, MathExpression, EvalFunction } from 'mathjs';

import { extend, Colord } from 'colord';
import xyzPlugin from 'colord/plugins/xyz';
import harmoniesPlugin, { HarmonyType } from '@/utils/harmonies';
extend([xyzPlugin, harmoniesPlugin]);

//--- Turns Out There's a Plugin That Literally Does Everything Here But Better ---
// Todo: Rework Using Colord

// -- List for English Naming Structure --
const EnglishIsCool = [
  'Primary',
  'Secondary',
  'Tertiary',
  'Quaternary',
  'Quinary',
  'Senary',
  'Septenary',
  'Octonary',
  'Nonary',
  'Denary',
];


// -- Generate Harmonies --
type genHarmony = {
  harmony: HarmonyType | number[];
  startingColor: Colord;
};

export const genHarmony = ({
  harmony,
  startingColor,
}: genHarmony): Colord[] => {
  if (typeof harmony === 'object') {
    return startingColor.customHarmony(harmony);
  } else {
    return startingColor.harmonies(harmony);
  }
};

// -- Generate Shades --
type genTones = {
  loop: number;
  brightFunc: MathExpression;
  satFunc: MathExpression;
};



export const genTones = (
  hues: Colord[],
  { loop, brightFunc, satFunc }: genTones
) => {
  let brightness: EvalFunction, saturation: EvalFunction;

  try {
    brightness = compile(brightFunc);
  } catch (err) {
    brightness = compile('x');
  }

  try {
    saturation = compile(satFunc);
  } catch (err) {
    saturation = compile('x');
  }

  const colors = hues.map((hue, index) => {
    const shadeGroup = EnglishIsCool[index];
    let group: {group: string, tones: Colord[]} = {group: shadeGroup, tones: []};

    for (let x = 0; x < loop; x++) {
      let brightMulti: number;
      let satMulti: number;

      try {
        brightMulti = brightness.evaluate({ x });
      } catch (err) {
        brightMulti = 10;
      }

      try {
        satMulti = saturation.evaluate({ x });
      } catch (err) {
        satMulti = 10;
      }

      const shade = hue.darken(brightMulti / 100).saturate(satMulti / 100);
      shade.id = x === 0 ? 50 : x * 100;
      
      group.tones.push(shade);
    }
    return group;
  });

  return colors;
};

// -- Combines Functions genHues and genShades --
export const colorGen = ({
  harmony,
  startingColor,
  brightFunc,
  satFunc,
  loop,
}: genHarmony & genTones) => {
  const hues = genHarmony({ harmony, startingColor });
  const shades = genTones(hues, { loop, brightFunc, satFunc });
  return shades;
};
