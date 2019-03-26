import { createTheme } from 'treat';
import tokens from './tokens';

const white = '#fff';
const black = '#000';
const blue2 = '#298EB9';
const blue3 = '#94C9E0';
const blue5 = '#EEF8FC';
const alert = '#ff4b4b';
const alertBackground = 'rgba(255,75,75, 0.15)'; // transparent seekAsia alert color
const completion = '#63b209';
const grey1 = '#333';
const grey2 = '#666';
const grey4 = '#ccc';
const candidate = '#0c4b85'; // SEEK Asia name for this color

const focusColor = blue3;
const formAccent = blue2;
const brandAccent = '#0d3880';

const color = {
  link: blue2,
  black,
  white,
  critical: alert,
  positive: completion,
  secondary: grey2,
  brandAccent,
  formAccent,
  neutral: grey1,
};

const fill = {
  formAccent,
  formAccentDisabled: grey4,
  critical: alert,
  positive: completion,
  secondary: grey1,
  white,
};

const borderRadius = {
  standard: '4px',
};

const boxShadow = {
  outlineFocus: focusColor,
  borderStandard: grey4,
  borderCritical: alert,
  borderFormAccent: formAccent,
};

const backgroundColor = {
  input: white,
  inputDisabled: grey4,
  brandAccent,
  formAccent,
  formAccentDisabled: grey4,
  selection: blue5,
  info: candidate,
  card: white,
  critical: alertBackground,
};

const fontFamily = {
  fontFamily:
    'Muli, -apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Droid Sans", "Helvetica Neue", Arial, sans-serif',
};

const fontWeight = {
  regular: 400,
  medium: 500,
  strong: 700,
};

const transform = {
  touchable: 'scale(0.98)',
};

export default createTheme({
  tokens,
  backgroundColor,
  color,
  fontFamily,
  fontWeight,
  transform,
  boxShadow,
  borderRadius,
  fill,
});
