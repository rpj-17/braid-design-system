import '../../components/Reset/Reset.treat';
import normalizeAtoms from '../../atoms/normalizeAtoms';
import tokens from './tokens';
import { Theme } from '../theme';
import atoms from './atoms.css.js';
import treatTheme from './theme.treat';

const theme: Theme = {
  treatTheme,
  name: 'seekAsia',
  tokens,
  atoms: normalizeAtoms(atoms),
};

export default theme;
