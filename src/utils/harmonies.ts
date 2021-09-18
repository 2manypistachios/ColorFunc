import { Plugin } from 'colord/extend';

export type HarmonyType =
  | 'monochromatic'
  | 'analogous'
  | 'complementary'
  | 'double-split-complementary'
  | 'rectangle'
  | 'split-complementary'
  | 'tetradic'
  | 'triadic';

declare module 'colord/colord' {
  interface Colord {
    /**
     * Returns an array of harmony colors as `Colord` instances.
     */
    harmonies(type?: HarmonyType): Colord[];
    customHarmony(type?: number[]): Colord[];
    id: number | string
  }
}

/**
 * Harmony colors are colors with particular hue shift of the original color.
 */
export const hueShifts: Record<HarmonyType, number[]> = {
  monochromatic: [0],
  analogous: [-30, 0, 30],
  complementary: [0, 180],
  'double-split-complementary': [-30, 0, 30, 150, 210],
  rectangle: [0, 60, 180, 240],
  tetradic: [0, 90, 180, 270],
  triadic: [0, 120, 240],
  'split-complementary': [0, 150, 210],
};

/**
 * A plugin adding functionality to generate harmony colors.
 * https://en.wikipedia.org/wiki/Harmony_(color)
 */
const harmoniesPlugin: Plugin = (ColordClass): void => {
  ColordClass.prototype.harmonies = function (type = 'complementary') {
    return hueShifts[type].map((shift) => this.rotate(shift));
  };

  ColordClass.prototype.customHarmony = function (type = [0, 180]) {
    return type.map((shift) => this.rotate(shift));
  };
};

export default harmoniesPlugin;
