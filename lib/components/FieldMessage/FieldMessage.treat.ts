import { style } from 'sku/treat';

export const grow = style({
  flexGrow: 1,
});

export const minHeight = style(theme => {
  const { responsiveStyles, grid } = theme.utils;
  const { mobile, desktop } = theme.typography.text.small;

  return responsiveStyles(
    { minHeight: grid(mobile.rows) },
    { minHeight: grid(desktop.rows) },
  );
});

export const fixedSize = style({
  flexShrink: 0,
  flexGrow: 0,
});
