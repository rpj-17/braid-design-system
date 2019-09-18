import { style } from 'sku/treat';

export const outer = style(({ utils, typography }) =>
  utils.responsiveStyles(
    { height: utils.grid(typography.text.xsmall.mobile.rows) },
    { height: utils.grid(typography.text.xsmall.desktop.rows) },
  ),
);

export const inner = style({
  overflow: 'hidden',
});
