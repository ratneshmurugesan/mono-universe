import * as core from './core.json';
import { color, font, size, space } from './category';

type Size = {
  [key: string]: size;
};
type Color = {
  [key: string]: color;
};
type Font = {
  [key: string]: font;
};
type Space = {
  [key: string]: space;
};

export const SIZES: Size = core.size;
export const COLORS: Color = core.color;
export const FONTS: Font = core.font;
export const SPACES: Space = core.size;
