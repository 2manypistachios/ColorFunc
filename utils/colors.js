import { compile } from 'mathjs'; // * Compile allows us to parse strings as mathematical expressions
const Color = require('color');  // * Color is a simple parsing library that allows us to create a color Object which can convert from hex to hsl.

//-- List for English Naming Structure --
const EnglishIsCool = [ 
  "Primary",
  "Secondary",
  "Tertiary",
  "Quaternary",
  "Quinary",
  "Senary",
  "Septenary",
  "Octonary",
  "Nonary",
  "Denary"
]

//-- Builder-Func To Create Hues --
function harmonize(color, start, end, interval) {
  const dict = {};
  const primary = Color(color);
  dict[EnglishIsCool[0]] = primary

  if (start === end && end === interval) return dict;

  let counter = 0;
  for (let i = start; i <= end; i += interval) {
    dict[EnglishIsCool[counter + 1]] = primary.rotate(i)
    counter++
  }
  return dict
}

//-- Predefined Hue Functions --
const mono = (primary) => harmonize(primary, 0, 0, 0)
const complement = (primary) => harmonize(primary, 180, 180, 1)
const split = (primary) => harmonize(primary, 150, 210, 60)
const triad = (primary) => harmonize(primary, 120, 240, 120)
const tetrad = (primary) => harmonize(primary, 90, 270, 90)
const analogous = (primary) => harmonize(primary, 30, 90, 30)


//-- Generate Hues --
export const genHues = ({ colorScheme, startingColor }) => {
  let hues
  switch (colorScheme) {
    default: hues = mono(startingColor); break
    case 'Monochromatic': hues = mono(startingColor); break
    case 'Analogous': hues = analogous(startingColor); break
    case 'Complementary': hues = complement(startingColor); break
    case 'Split': hues = split(startingColor); break
    case 'Triadic': hues = triad(startingColor); break
    case 'Tetrad': hues = tetrad(startingColor); break
  }
  return hues;
}

//-- Generate Shades --
export const genShades = (dict, { loop, brightFunc, satFunc }) => {
  let brightness, saturation, shades = {};

  try {
    brightness = compile(brightFunc);
  } catch (err) {
    brightness = compile("x")
  }

  try {
    saturation = compile(satFunc);
  } catch (err) {
    saturation = compile("x")
  }

  Object.keys(dict).forEach(key => shades[key] = new Map());

  for (let [key, val] of Object.entries(dict)) {
    if (dict.hasOwnProperty(key)) {
      for (let i = 0; i < loop; i++) {
        try {
          var brightMulti = brightness.evaluate({ x: i });
        } catch (err) {
          var brightMulti = 10;
        }

        try {
          var satMulti = saturation.evaluate({ x: i });
        } catch (err) {
          var satMulti = 10;
        }

        const shade = val.darken(brightMulti / 100).saturate(satMulti / 100);
        const shadeId = (i == 0) ? 50 : (i) * 100
        shades[key].set(shadeId, {
          "hex": shade.hex(),
          "hsl": shade.round().hsl().color,
          "rgb": shade.rgb()
        });
      }
    }
  }
  return shades;
}

//-- Combines Functions genHues and genShades --
export const colorGen = ({ colorScheme, startingColor, brightFunc, satFunc, loop }) => {
  const hues = genHues({ colorScheme, startingColor });
  const shades = genShades(hues, { loop, brightFunc, satFunc })
  return shades;
}


//-- Intended to use as a datastore to provide tooltips, currently generates key-names for hues.js
export const colorTheory = {
  "Monochromatic": {
    "colors": mono,
    "desc": "Monochromatic color schemes are formed using various tones and shades of one single color."
  },
  "Analogous": {
    "colors": analogous,
    "desc": "An analogous color scheme is formed of three colors that are located next to each other on the color wheel. Analogous color palettes are commonly used when no contrast is needed—for example, on the background of web pages or banners."
  },
  "Complementary": {
    "colors": complement,
    "desc": "Complementary color palettes are comprised of colors that are placed in front of each other on the color wheel. While the name may suggest otherwise, complementary color palettes are actually the opposite of analogous and monochromatic color palettes, as they aim to produce contrast. For example, a red button on a blue background will stand out on any interface."
  },
  "Split": {
    "colors": split
  },
  "Triadic": {
    "colors": triad
  },
  "Tetrad": {
    "colors": tetrad,
  }
}


//*** ALL ELSE IS UNUSED BUT POTENTIALLY USEFUL IN FUTURE ***
// const binomialCoeff = (n) => { return (n ** 2 + n) / 2 }


// Unused Combination Generation for mixing colors together
/*
const combinations = (list) => {
  const set = [],
    listSize = list.length
  // const combinationsCount = binomialCoeff(list.length-1),

  for (let x = 0; x < listSize; x++) {
    for (let y = x + 1; y < listSize; y++) {
      set.push([list[x], list[y]])
    }
  }
  return set;
}
*/

// Unfinished Mix Generation
/*
export const genMixes = (dict, { loop }) => {
  const mixes = {}

  combinations(Object.keys(dict)).forEach(([a, b]) => {
    const mix = [];
    for (let i = 0; i < loop; i++) {
      mix.push(dict[a].mix(dict[b], (loop - i) / i))
    }
    mixes[`${a} - ${b}`] = mix;
  })

  return mixes;
}
*/