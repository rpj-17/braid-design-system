import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';

import {
  white,
  black,
  blue2,
  blue5,
  grey1,
  grey2,
  grey4,
  critical,
  info,
  positive,
  focusColor,
  formAccent,
  brandAccent,
} from './palette';

const colors = {
  link: blue2,
  black,
  white,
  critical,
  info,
  positive,
  secondary: grey2,
  brandAccent,
  formAccent,
  neutral: grey1,
};

const borderRadius = {
  standard: '4px',
};

const boxShadows = {
  outlineFocus: focusColor,
  borderStandard: grey4,
  borderCritical: critical,
  borderFormAccent: formAccent,
};

const backgroundColor = {
  input: white,
  inputDisabled: grey4,
  brandAccent,
  formAccent,
  formAccentDisabled: grey4,
  selection: blue5,
  card: white,
  critical,
  info,
  positive,
};

const fontFamily = {
  fontFamily:
    'Muli, -apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Droid Sans", "Helvetica Neue", Arial, sans-serif',
};

const fontWeights = {
  regular: 400,
  medium: 500,
  strong: 700,
};

const transforms = {
  touchable: 'scale(0.98)',
};

export default makeAtoms(
  tokens,
  colors,
  fontFamily,
  borderRadius,
  boxShadows,
  fontWeights,
  backgroundColor,
  transforms,
);
