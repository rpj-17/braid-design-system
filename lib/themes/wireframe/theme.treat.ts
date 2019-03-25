import { createTheme } from 'treat';
import tokens from './tokens';

const focusColor = 'DeepSkyBlue';
const formAccent = 'blue';
const brandAccent = 'DarkOrange';

const color = {
  link: '#4c77bb',
  black: '#2b2b2b',
  white: 'white',
  critical: 'red',
  positive: 'green',
  secondary: '#777',
  brandAccent,
  formAccent,
  neutral: '#2b2b2b',
};

const fill = {
  formAccent,
  formAccentDisabled: '#ccc',
  critical: 'red',
  positive: 'green',
  secondary: '#777',
  white: 'white',
};

const borderRadius = {
  standard: '4px',
};

const boxShadow = {
  outlineFocus: focusColor,
  borderStandard: '#777',
  borderCritical: 'red',
  borderFormAccent: formAccent,
};

const backgroundColor = {
  input: 'white',
  inputDisabled: '#eee',
  brandAccent,
  formAccent,
  formAccentDisabled: '#ccc',
  selection: '#eee',
  info: 'navy',
  card: '#fff',
  critical: 'pink',
};

const fontFamily = {
  fontFamily: 'Courier, monospace',
};

const fontWeight = {
  regular: 400,
  medium: 500,
  strong: 600,
};

const transform = {
  touchable: 'scale(0.97)',
};

export default createTheme({
  tokens,
  backgroundColor,
  color,
  boxShadow,
  borderRadius,
  fill,
  fontWeight,
  fontFamily,
  transform,
});
