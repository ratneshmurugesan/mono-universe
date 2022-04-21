import { COLORS, FONTS, SIZES, SPACES } from './global';

// Namespace = system +- theme +- domain
// Object = group +- component +- element
// Base = category +- concept +- property
// Modifier = variant +- state +- scale +- mode(on or w/o on)

// system-component-category-concept-property-variant-scale
// mu-box-color-inset-background-error-1-x

const refTokens = {
    'x-ref-size-text': SIZES[0],
    'x-ref-color-primary': COLORS['black'],
    'x-ref-font-plain': FONTS['roboto'],
    'x-ref-space-button-text': `${SPACES['m']} ${SPACES['m']} ${SPACES['m']} ${SPACES['m']}`,
};

export default refTokens;
