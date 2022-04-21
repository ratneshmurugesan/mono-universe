import { core } from './base';

// Namespace = system +- theme +- domain
// Object = group +- component +- element
// Base = category +- concept +- property
// Modifier = variant +- state +- scale +- mode(on or w/o on)

const { color, size, duration, effect, font, ease } = core;

// system-component-category-concept-property-variant-scale
const commonTokens = {
  'mu-small-text': size.s,
  'mu-color-primary': color.black,
  'mu-font-plain': font.primary,
  'mu-motion-transition-slide-in': `${ease.standard} ${duration.moderate['01']}`,
  'mu-motion-opacity-fade-in': `${effect.fadeIn}`,
};

export { commonTokens };
