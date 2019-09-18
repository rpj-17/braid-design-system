import mapValues from 'lodash/mapValues';
import { style, styleMap, ClassRef } from 'sku/treat';
import { Theme } from 'treat/theme';
import { getAccessibleVariant, isLight, mapToStyleProperty } from '../../utils';
import { Breakpoint } from '../../themes/makeTreatTheme';
import { UseBoxProps } from '../useBox';

interface BaseKickOptions {
  typeSizeModifier: number;
  baseFontSize: number;
  descenderHeightScale: number;
  capHeight: number;
  typeRowSpan: number;
  gridRowHeight: number;
}
const basekick = ({
  typeSizeModifier,
  baseFontSize,
  descenderHeightScale,
  typeRowSpan,
  gridRowHeight,
  capHeight,
}: BaseKickOptions) => {
  const fontSize = typeSizeModifier * baseFontSize;

  const calculateTypeOffset = (lh: number) => {
    const lineHeightScale = lh / fontSize;
    return (lineHeightScale - 1) / 2 + descenderHeightScale;
  };

  const lineHeight = typeRowSpan * gridRowHeight;
  const typeOffset = calculateTypeOffset(lineHeight);

  const topSpace = lineHeight - capHeight * fontSize;
  const heightCorrection =
    topSpace > gridRowHeight ? topSpace - (topSpace % gridRowHeight) : 0;

  const preventCollapse = 1;

  return {
    fontSize: {
      fontSize: `${fontSize}px`,
      lineHeight: `${lineHeight}px`,
    },
    transform: {
      transform: `translateY(${typeOffset}em)`,
      paddingTop: preventCollapse,
      ':before': {
        content: "''",
        marginTop: -(heightCorrection + preventCollapse),
        display: 'block',
        height: 0,
      },
    },
  };
};

export const fontFamily = style(({ typography }) => ({
  fontFamily: typography.fontFamily,
}));

export const fontWeight = styleMap(({ typography }) =>
  mapToStyleProperty(typography.fontWeight, 'fontWeight'),
);

interface TextDefinition {
  rows: number;
  size: number;
}

const alignTextToGrid = (
  textDefinition: TextDefinition,
  gridRowHeight: number,
  descenderHeightScale: number,
) =>
  basekick({
    baseFontSize: 1,
    typeSizeModifier: textDefinition.size,
    typeRowSpan: textDefinition.rows,
    gridRowHeight,
    descenderHeightScale,
    capHeight: 0.6990434142752023,
  });

const makeTypographyRules = (
  textDefinition: Record<Breakpoint, TextDefinition>,
  { grid, typography, utils }: Theme,
) => {
  const mobile = alignTextToGrid(
    textDefinition.mobile,
    grid,
    typography.descenderHeightScale,
  );

  const desktop = alignTextToGrid(
    textDefinition.desktop,
    grid,
    typography.descenderHeightScale,
  );

  return {
    fontSize: utils.responsiveStyles(mobile.fontSize, desktop.fontSize),
    transform: utils.responsiveStyles(mobile.transform, desktop.transform),
  };
};

export const text = {
  xsmall: styleMap(theme =>
    makeTypographyRules(theme.typography.text.xsmall, theme),
  ),
  small: styleMap(theme =>
    makeTypographyRules(theme.typography.text.small, theme),
  ),
  standard: styleMap(theme =>
    makeTypographyRules(theme.typography.text.standard, theme),
  ),
  large: styleMap(theme =>
    makeTypographyRules(theme.typography.text.large, theme),
  ),
};

export const headingWeight = styleMap(({ typography }) =>
  mapValues(typography.heading.weight, weight => ({
    fontWeight: typography.fontWeight[weight],
  })),
);

export const heading = {
  '1': styleMap(theme =>
    makeTypographyRules(theme.typography.heading.level['1'], theme),
  ),
  '2': styleMap(theme =>
    makeTypographyRules(theme.typography.heading.level['2'], theme),
  ),
  '3': styleMap(theme =>
    makeTypographyRules(theme.typography.heading.level['3'], theme),
  ),
  '4': styleMap(theme =>
    makeTypographyRules(theme.typography.heading.level['4'], theme),
  ),
};

export const tone = styleMap(theme => {
  const {
    linkHover,
    link,
    neutralInverted, // Omit from public API
    ...foreground
  } = theme.color.foreground;

  return {
    ...mapToStyleProperty(foreground, 'color'),
    link: {
      color: link,
      ...(link !== linkHover
        ? {
            ':hover': { color: linkHover },
            ':focus': { color: linkHover },
          }
        : {}),
    },
  };
});

const accessibleColorVariants = styleMap(({ color: { foreground } }) => ({
  critical: {
    color: getAccessibleVariant(foreground.critical),
  },
  positive: {
    color: getAccessibleVariant(foreground.positive),
  },
  info: {
    color: getAccessibleVariant(foreground.info),
  },
}));

const textColorForBackground = (
  background: keyof Theme['color']['background'],
) => {
  const resolveOverride = (theme: Theme) => {
    // Override to ensure we use `neutral` foreground color when on
    // JobsDB `brandAccent` background.
    if (theme.name === 'jobsDb' && background === 'brandAccent') {
      return theme.color.foreground.neutralInverted;
    }
  };

  return style(
    theme => ({
      color:
        resolveOverride(theme) ||
        (isLight(theme.color.background[background])
          ? theme.color.foreground.neutral
          : theme.color.foreground.neutralInverted),
    }),
    `textColorForBackground-${background}`,
  );
};

type Foreground = keyof typeof tone;
type BoxBackground = NonNullable<UseBoxProps['background']>;
type BackgroundContrast = {
  [background in BoxBackground]?: {
    [foreground in Foreground | 'default']?: ClassRef;
  };
};
export const backgroundContrast: BackgroundContrast = {
  criticalLight: {
    default: accessibleColorVariants.critical,
    critical: accessibleColorVariants.critical,
  },
  positiveLight: {
    default: accessibleColorVariants.positive,
    positive: accessibleColorVariants.positive,
  },
  infoLight: {
    default: accessibleColorVariants.info,
    info: accessibleColorVariants.info,
  },
  brand: {
    default: textColorForBackground('brand'),
  },
  brandAccent: {
    default: textColorForBackground('brandAccent'),
  },
  brandAccentHover: {
    default: textColorForBackground('brandAccent'),
  },
  brandAccentActive: {
    default: textColorForBackground('brandAccent'),
  },
  formAccent: {
    default: textColorForBackground('formAccent'),
  },
  formAccentHover: {
    default: textColorForBackground('formAccent'),
  },
  formAccentActive: {
    default: textColorForBackground('formAccent'),
  },
  positive: {
    default: textColorForBackground('positive'),
  },
  critical: {
    default: textColorForBackground('critical'),
  },
  info: {
    default: textColorForBackground('info'),
  },
  neutral: {
    default: textColorForBackground('neutral'),
  },
};

const makeTouchableSpacing = (touchableHeight: number, textHeight: number) => {
  const space = (touchableHeight - textHeight) / 2;

  return {
    paddingTop: space,
    paddingBottom: space,
  };
};

export const touchable = styleMap(
  ({ grid, typography, touchableSpace, utils }) =>
    mapValues(typography.text, textDefinition =>
      utils.responsiveStyles(
        makeTouchableSpacing(
          grid * touchableSpace,
          grid * textDefinition.mobile.rows,
        ),
        makeTouchableSpacing(
          grid * touchableSpace,
          grid * textDefinition.desktop.rows,
        ),
      ),
    ),
);
