import '../../components/Reset/Reset.treat';
import treatTheme from './theme.treat';
import normalizeAtoms from '../../atoms/normalizeAtoms';
import tokens from './tokens';
import { Theme } from '../theme';
import atoms from './atoms.css.js';

const theme: Theme = {
  treatTheme,
  name: 'seekAnz',
  tokens,
  atoms: normalizeAtoms(atoms),
};

export default theme;
