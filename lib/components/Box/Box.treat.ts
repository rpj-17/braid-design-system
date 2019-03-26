import { css } from 'treat';
import { makeDesktopRule, px, isLight } from '../../utils/stylesUtils';
import { darken, lighten } from 'polished';
import mapValues from 'lodash/mapValues';
import merge from 'lodash/merge';
import { Theme } from 'treat/theme';

export const getActiveColor = (color: string): string =>
  isLight(color) ? darken(0.1, color) : darken(0.05, color);

export const getHoverColor = (color: string): string =>
  isLight(color) ? darken(0.05, color) : lighten(0.05, color);

export const backgroundColors = css(theme => ({
  input: { backgroundColor: theme.backgroundColor.input },
  inputDisabled: {
    backgroundColor: theme.backgroundColor.inputDisabled,
  },
  formAccent: {
    backgroundColor: theme.backgroundColor.formAccent,
  },
  formAccentActive: {
    backgroundColor: getActiveColor(theme.backgroundColor.formAccent),
  },
  formAccentHover: {
    backgroundColor: getHoverColor(theme.backgroundColor.formAccent),
  },
  formAccentDisabled: {
    backgroundColor: theme.backgroundColor.formAccentDisabled,
  },
  brandAccent: { backgroundColor: theme.backgroundColor.brandAccent },
  brandAccentActive: {
    backgroundColor: getActiveColor(theme.backgroundColor.brandAccent),
  },
  brandAccentHover: {
    backgroundColor: getHoverColor(theme.backgroundColor.brandAccent),
  },
  selection: { backgroundColor: theme.backgroundColor.selection },
  info: { backgroundColor: theme.backgroundColor.info },
  card: { backgroundColor: theme.backgroundColor.card },
  critical: { backgroundColor: theme.backgroundColor.critical },
}));

export const display = {
  main: css({
    block: { display: 'block' },
    inline: { display: 'inline' },
    none: { display: 'none' },
    inlineBlock: { display: 'inline-block' },
    flex: { display: 'flex' },
  }),
  desktop: css(theme => ({
    block: makeDesktopRule(theme, { display: 'block' }),
    inline: makeDesktopRule(theme, { display: 'inline' }),
    none: makeDesktopRule(theme, { display: 'none' }),
    inlineBlock: makeDesktopRule(theme, { display: 'inline-block' }),
    flex: makeDesktopRule(theme, { display: 'flex' }),
  })),
};

export const flexDirection = {
  main: css({
    row: { flexDirection: 'row' as 'row' },
    column: { flexDirection: 'column' as 'column' },
  }),
  desktop: css(theme => ({
    row: makeDesktopRule(theme, { flexDirection: 'row' as 'row' }),
    column: makeDesktopRule(theme, { flexDirection: 'column' as 'column' }),
  })),
};

export const borderRadius = css(theme => ({
  standard: { borderRadius: theme.borderRadius.standard },
}));

export const boxShadow = css(theme => {
  const { borderWidth } = theme.tokens;
  const {
    outlineFocus,
    borderStandard,
    borderFormAccent,
    borderCritical,
  } = theme.boxShadow;

  return {
    outlineFocus: {
      boxShadow: `0 0 0 ${px(borderWidth.large)} ${outlineFocus}`,
    },
    borderStandard: {
      boxShadow: `inset 0 0 0 ${px(borderWidth.standard)} ${borderStandard}`,
    },
    borderCritical: {
      boxShadow: `inset 0 0 0 ${px(borderWidth.standard)} ${borderCritical}`,
    },
    borderFormAccent: {
      boxShadow: `inset 0 0 0 ${px(borderWidth.standard)} ${borderFormAccent}`,
    },
    borderFormAccentLarge: {
      boxShadow: `inset 0 0 0 ${px(borderWidth.large)} ${borderFormAccent}`,
    },
  };
});

export const transition = css({
  fast: {
    transition: 'transform .125s ease, opacity .125s ease',
  },
  touchable: {
    transition: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
  },
});

export const width = css({
  full: {
    width: '100%',
  },
});

const makeTouchablePaddingRules = (
  ruleName: 'paddingTop' | 'paddingBottom',
) => {
  const makeRule = (theme: Theme, breakpoint: 'mobile' | 'desktop') => {
    const { touchableRows, rowHeight, text } = theme.tokens;

    const touchableHeight = touchableRows * rowHeight;
    const touchablePadding = px(
      (touchableHeight - text.standard[breakpoint].rows * rowHeight) / 2,
    );
    return {
      [ruleName]: touchablePadding,
    };
  };

  const main = css(theme => ({
    standardTouchableText: makeRule(theme, 'mobile'),
  }));

  const desktop = css(theme => ({
    standardTouchableText: {
      ...makeDesktopRule(theme, makeRule(theme, 'desktop')),
    },
  }));

  return {
    main,
    desktop,
  };
};

const makeRowSpacing = <RuleName extends string>(ruleName: RuleName) => {
  const none = {
    [ruleName]: 0,
  };

  const main = css(theme => ({
    ...mapValues(theme.tokens.rowSpacing, value => ({
      [ruleName]: px(value * theme.tokens.rowHeight),
    })),
    none,
  }));

  const desktop = css(theme => ({
    ...mapValues(theme.tokens.rowSpacing, value =>
      makeDesktopRule(theme, {
        [ruleName]: px(value * theme.tokens.rowHeight),
      }),
    ),
    none,
  }));

  return {
    main,
    desktop,
  };
};

export const marginTop = makeRowSpacing('marginTop');
export const marginBottom = makeRowSpacing('marginBottom');
export const paddingTop = merge(
  makeRowSpacing('paddingTop'),
  makeTouchablePaddingRules('paddingTop'),
);
export const paddingBottom = merge(
  makeRowSpacing('paddingBottom'),
  makeTouchablePaddingRules('paddingBottom'),
);

const makeColumnSpacing = <RuleName extends string>(ruleName: RuleName) => {
  const none = {
    [ruleName]: 0,
  };

  const main = css(theme => ({
    ...mapValues(theme.tokens.columnSpacing, value => ({
      [ruleName]: px(value * theme.tokens.columnWidth),
    })),
    none,
  }));

  const desktop = css(theme => ({
    ...mapValues(theme.tokens.columnSpacing, value =>
      makeDesktopRule(theme, {
        [ruleName]: px(value * theme.tokens.columnWidth),
      }),
    ),
    none,
  }));

  return {
    main,
    desktop,
  };
};

export const marginLeft = makeColumnSpacing('marginLeft');
export const marginRight = makeColumnSpacing('marginRight');
export const paddingLeft = makeColumnSpacing('paddingLeft');
export const paddingRight = makeColumnSpacing('paddingRight');
