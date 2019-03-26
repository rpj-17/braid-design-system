import { Atoms } from '../themes/theme';
import CssModuleAtoms from '../themes/wireframe/atoms.css.js.d';

export default (atoms: typeof CssModuleAtoms): Atoms => ({
  color: {
    link: atoms.color_link,
    black: atoms.color_black,
    critical: atoms.color_critical,
    brandAccentForeground: atoms.color_brandAccentForeground,
    formAccent: atoms.color_formAccent,
    neutral: atoms.color_neutral,
    positive: atoms.color_positive,
    secondary: atoms.color_secondary,
    white: atoms.color_white,
  },
  fill: {
    critical: atoms.fill_critical,
    currentColor: atoms.fill_currentColor,
    formAccent: atoms.fill_formAccent,
    formAccentDisabled: atoms.fill_formAccentDisabled,
    positive: atoms.fill_positive,
    secondary: atoms.fill_secondary,
    white: atoms.fill_white,
  },
  fontFamily: {
    text: atoms.fontFamily_text,
  },
  fontSize: {
    large: atoms.fontSize_large,
    level1: atoms.fontSize_level1,
    level2: atoms.fontSize_level2,
    level3: atoms.fontSize_level3,
    standard: atoms.fontSize_standard,
  },
  fontWeight: {
    medium: atoms.fontWeight_medium,
    regular: atoms.fontWeight_regular,
    strong: atoms.fontWeight_strong,
  },
  height: {
    largeText: atoms.height_largeText,
    largeTextInline: atoms.height_largeTextInline,
    standardText: atoms.height_standardText,
    standardTextInline: atoms.height_standardTextInline,
  },
  minHeight: {
    largeText: atoms.minHeight_largeText,
    largeTextInline: atoms.minHeight_largeTextInline,
    standardText: atoms.minHeight_standardText,
    standardTextInline: atoms.minHeight_standardTextInline,
  },
  transform: {
    largeText: atoms.transform_largeText,
    level1Heading: atoms.transform_level1Heading,
    level2Heading: atoms.transform_level2Heading,
    level3Heading: atoms.transform_level3Heading,
    standardText: atoms.transform_standardText,
    touchable: atoms.transform_touchable,
  },
  width: {
    largeText: atoms.width_largeText,
    largeTextInline: atoms.width_largeTextInline,
    standardText: atoms.width_standardText,
    standardTextInline: atoms.width_standardTextInline,
    full: atoms.width_full,
  },
});
