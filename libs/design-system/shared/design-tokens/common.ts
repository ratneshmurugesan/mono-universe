import base from './base.json';

// Namespace = system +- theme +- domain
// Object = group +- component +- element
// Base = category +- concept +- property
// Modifier = variant +- state +- scale +- mode(on or w/o on)
// system-component-category-concept-property-variant-scale

const { color, size, duration, font, ease } = base;

const colorTokens = {
  'color-black': `hsla(${color.black}, 1)`,
  'color-white': `hsla(${color.white}, 1)`,
  // 'form-color-feedback-background-error-on-light': `hsla(${color.white}, 1)`,
};

const fontTokens = {
  'font-plain': font.roboto,
};

const spaceTokens = {
  'space-xxs': size.xxs,
  'space-inset-xxs': `${size.xxs} ${size.xxs} ${size.xxs} ${size.xxs}`,
  'space-squish-inset-xxs': `${size.s} ${size.xxs} ${size.s} ${size.xxs}`,
  'space-stretch-inset-xxs': `${size.xxs} ${size.s} ${size.xxs} ${size.s}`,
  'space-stack-xxs': `${size.none} ${size.none} ${size.xxs} ${size.none}`,
  'space-inline-xxs': `${size.none} ${size.xxs} ${size.none} ${size.none}`,

  'space-xs': size.xs,
  'space-inset-xs': `${size.xs} ${size.xs} ${size.xs} ${size.xs}`,
  'space-squish-inset-xs': `${size.s} ${size.xs} ${size.s} ${size.xs}`,
  'space-stretch-inset-xs': `${size.xs} ${size.s} ${size.xs} ${size.s}`,
  'space-stack-xs': `${size.none} ${size.none} ${size.xs} ${size.none}`,
  'space-inline-xs': `${size.none} ${size.xs} ${size.none} ${size.none}`,

  'space-s': size.s,
  'space-inset-s': `${size.s} ${size.s} ${size.s} ${size.s}`,
  'space-squish-inset-s': `${size.s} ${size.s} ${size.s} ${size.s}`,
  'space-stretch-inset-s': `${size.s} ${size.s} ${size.s} ${size.s}`,
  'space-stack-s': `${size.none} ${size.none} ${size.s} ${size.none}`,
  'space-inline-s': `${size.none} ${size.s} ${size.none} ${size.none}`,

  'space-m': size.m,
  'space-inset-m': `${size.m} ${size.m} ${size.m} ${size.m}`,
  'space-squish-inset-m': `${size.s} ${size.m} ${size.s} ${size.m}`,
  'space-stretch-inset-m': `${size.m} ${size.s} ${size.m} ${size.s}`,
  'space-stack-m': `${size.none} ${size.none} ${size.m} ${size.none}`,
  'space-inline-m': `${size.none} ${size.m} ${size.none} ${size.none}`,

  'space-l': size.l,
  'space-inset-l': `${size.l} ${size.l} ${size.l} ${size.l}`,
  'space-squish-inset-l': `${size.s} ${size.l} ${size.s} ${size.l}`,
  'space-stretch-inset-l': `${size.l} ${size.s} ${size.l} ${size.s}`,
  'space-stack-l': `${size.none} ${size.none} ${size.l} ${size.none}`,
  'space-inline-l': `${size.none} ${size.l} ${size.none} ${size.none}`,

  'space-xl': size.xl,
  'space-inset-xl': `${size.xl} ${size.xl} ${size.xl} ${size.xl}`,
  'space-squish-inset-xl': `${size.s} ${size.xl} ${size.s} ${size.xl}`,
  'space-stretch-inset-xl': `${size.xl} ${size.s} ${size.xl} ${size.s}`,
  'space-stack-xl': `${size.none} ${size.none} ${size.xl} ${size.none}`,
  'space-inline-xl': `${size.none} ${size.xl} ${size.none} ${size.none}`,
};

const animationTokens = {
  // fadeIn: null,
  // fadeOut: null,
  'transition-slide-in': `${ease.standard} ${duration.moderate['01']}`,
};

export { colorTokens, spaceTokens, fontTokens, animationTokens };
