import { style, styleMap } from 'sku/treat';
import { mapToStyleProperty } from '../../utils';

export const preventCollapse = 1;
export const root = style({ paddingTop: preventCollapse });

export const offsetY = styleMap(theme => ({
  none: { marginBottom: -preventCollapse },
  ...mapToStyleProperty(
    theme.space,
    'marginBottom',
    (space: number, propertyName) => ({
      [propertyName]: -(space * theme.grid) - preventCollapse,
    }),
  ),
}));

export const offsetYDesktop = styleMap(theme => ({
  none: theme.utils.desktopStyles({ marginBottom: -preventCollapse }),
  ...mapToStyleProperty(
    theme.space,
    'marginBottom',
    (space: number, propertyName) =>
      theme.utils.desktopStyles({
        [propertyName]: -(space * theme.grid) - preventCollapse,
      }),
  ),
}));
