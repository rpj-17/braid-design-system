import { style } from 'sku/treat';

export const field = style(({ utils: { grid } }) => ({
  resize: 'vertical',
  minHeight: grid(15),
}));
