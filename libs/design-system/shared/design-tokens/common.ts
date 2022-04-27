import {
  color as _color,
  size as _size,
  duration as _duration,
  font as _font,
  ease as _ease,
  border as _border,
} from './base.json';

const size0 = _size[0];
const size100 = _size[100];
const size200 = _size[200];
const size300 = _size[300];
const size400 = _size[400];
const size500 = _size[500];
const size600 = _size[600];
const size700 = _size[700];
const size800 = _size[800];
const size900 = _size[900];

const fontSize100 = _font.size[100];
const fontSize200 = _font.size[200];
const fontSize300 = _font.size[300];
const fontSize400 = _font.size[400];
const fontSize500 = _font.size[500];
const fontSize700 = _font.size[700];

// Namespace = system +- theme +- domain
// Object = group +- component +- element
// Base = category +- concept +- property
// Modifier = variant +- state +- scale +- mode(on or w/o on)
// system-component-category-concept-property-variant-scale

const color = {
  black: _color.black,
  white: _color.white,

  'purple-lightest': _color.purple,
  'purple-lighter': _color.purple,
  'purple-light': _color.purple,
  purple: _color.purple.regular,
  'purple-dark': _color.purple.dark,
  'purple-darker': _color.purple.darker,
};

const font = {
  'family-primary': _font.family.roboto,
  'family-secondary': _font.family.helvetica,

  'size-h1': fontSize700,
  'size-h2': fontSize500,
  'size-h3': fontSize400,
  'size-h4': fontSize300,
  'size-h5': fontSize200,
  'size-h6': fontSize100,
  size: fontSize300,
  'size-sm': fontSize200,

  'weight-light': _font.weight.light,
  'weight-regular': _font.weight.light,
  'weight-semibold': _font.weight.semibold,
  'weight-bold': _font.weight.bold,
  'weight-extrabold': _font.weight.extrabold,
};

const lineHeight = {
  h1: size900,
  h2: size800,
  h3: size700,
  h4: size600,
  h5: size500,
  h6: size400,

  regular: size600,
};

const border = {
  'radius-base': _border.radius.base,
  'radius-secondary': _border.radius.secondary,
  'radius-circle': _border.radius.circle,
  'width-xxs': size100,
  'width-xs': size200,
  'width-s': size300,
  'width-m': size400,
  'width-l': size500,
  'width-xl': size600,
  'width-xxl': size700,
};

const shadow = {
  'elevation-low': size100,
  'elevation-medium': size400,
  'elevation-high': size500,
  // 'box-shadow-low': `${shadow}`,
};

const space = {
  xxs: size100,
  'inset-xxs': `${size100} ${size100} ${size100} ${size100}`,
  'squish-inset-xxs': `${size300} ${size100} ${size300} ${size100}`,
  'stretch-inset-xxs': `${size100} ${size300} ${size100} ${size300}`,
  'stack-xxs': `${size0} ${size0} ${size100} ${size0}`,
  'inline-xxs': `${size0} ${size100} ${size0} ${size0}`,

  xs: size200,
  'inset-xs': `${size200} ${size200} ${size200} ${size200}`,
  'squish-inset-xs': `${size300} ${size200} ${size300} ${size200}`,
  'stretch-inset-xs': `${size200} ${size300} ${size200} ${size300}`,
  'stack-xs': `${size0} ${size0} ${size200} ${size0}`,
  'inline-xs': `${size0} ${size200} ${size0} ${size0}`,

  s: size300,
  'inset-s': `${size300} ${size300} ${size300} ${size300}`,
  'squish-inset-s': `${size300} ${size300} ${size300} ${size300}`,
  'stretch-inset-s': `${size300} ${size300} ${size300} ${size300}`,
  'stack-s': `${size0} ${size0} ${size300} ${size0}`,
  'inline-s': `${size0} ${size300} ${size0} ${size0}`,

  m: size400,
  'inset-m': `${size400} ${size400} ${size400} ${size400}`,
  'squish-inset-m': `${size300} ${size400} ${size300} ${size400}`,
  'stretch-inset-m': `${size400} ${size300} ${size400} ${size300}`,
  'stack-m': `${size0} ${size0} ${size400} ${size0}`,
  'inline-m': `${size0} ${size400} ${size0} ${size0}`,

  l: size500,
  'inset-l': `${size500} ${size500} ${size500} ${size500}`,
  'squish-inset-l': `${size300} ${size500} ${size300} ${size500}`,
  'stretch-inset-l': `${size500} ${size300} ${size500} ${size300}`,
  'stack-l': `${size0} ${size0} ${size500} ${size0}`,
  'inline-l': `${size0} ${size500} ${size0} ${size0}`,

  xl: size600,
  'inset-xl': `${size600} ${size600} ${size600} ${size600}`,
  'squish-inset-xl': `${size300} ${size600} ${size300} ${size600}`,
  'stretch-inset-xl': `${size600} ${size300} ${size600} ${size300}`,
  'stack-xl': `${size0} ${size0} ${size600} ${size0}`,
  'inline-xl': `${size0} ${size600} ${size0} ${size0}`,
};

const animation = {
  'slow-fade-long-distance': `${_ease['in-out']} ${_duration.slow}`,
  'medium-fade-medium-distance': `${_duration.medium}`,
  'long-fade-long-distance': `${_duration.medium}`,
};

export { color, space, font, animation, border, shadow, lineHeight };
