import makeTreatTheme from '../makeTreatTheme';
import tokens from './tokens';

import {
  white,
  grey1,
  grey4,
  critical,
  info,
  positive,
  formAccent,
} from './palette';

export default makeTreatTheme({
  ...tokens,
  name: 'jobStreet',
  color: {
    foreground: {
      formAccent,
      formAccentDisabled: grey4,
      critical,
      info,
      positive,
      secondary: grey1,
      white,
    },
  },
});
