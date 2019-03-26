import { css } from 'treat';

const reset = css({
  base: {
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
  },
  // HTML5 display-role reset for older browsers
  block: {
    display: 'block',
  },
  body: {
    lineHeight: 1,
  },
  list: {
    listStyle: 'none',
  },
  quote: {
    quotes: 'none',
    selectors: {
      '&:before, &:after': {
        content: "''",
      },
    },
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
  // Custom reset rules
  mark: {
    backgroundColor: 'transparent',
    color: 'inherit',
  },
  select: {
    appearance: 'none',
  },
});

export const baseReset = reset.base;

export const specificResets = {
  article: reset.block,
  aside: reset.block,
  details: reset.block,
  figcaption: reset.block,
  figure: reset.block,
  footer: reset.block,
  header: reset.block,
  hgroup: reset.block,
  menu: reset.block,
  nav: reset.block,
  section: reset.block,
  ul: reset.list,
  ol: reset.list,
  blockquote: reset.quote,
  q: reset.quote,
  body: reset.body,
  table: reset.table,
  mark: reset.mark,
  select: reset.select,
};
