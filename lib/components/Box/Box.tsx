import React from 'react';
import { useClassNames, ClassRef } from 'treat';
import { useTheme } from '../private/ThemeContext';
import { Reset, ResetProps } from '../Reset/Reset';
import {
  BorderRadius,
  BackgroundColor,
  Display,
  FlexDirection,
  BoxShadow,
  Transition,
  Transform,
  Width,
  IconSize,
} from '../../themes/theme';

import * as styles from './Box.treat';

interface ResponsiveStyle<StyleName extends string> {
  main: Record<StyleName, ClassRef>;
  desktop: Record<StyleName, ClassRef>;
}

function getResponsiveClassRefs<StyleName extends string>(
  refs: ResponsiveStyle<StyleName>,
  propValue: ResponsiveProp<StyleName> | undefined,
) {
  if (!propValue) {
    return;
  }

  if (typeof propValue === 'string') {
    return refs.main[propValue];
  }

  return [refs.main[propValue[0]], refs.desktop[propValue[1]]];
}

type ResponsiveProp<AtomName> = AtomName | [AtomName, AtomName];
type Spacing =
  | 'none'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge';
type HorizontalSpacing = Spacing | 'gutter';
type VerticalPadding = Spacing | 'standardTouchableText';

export interface BoxProps extends ResetProps {
  marginTop?: ResponsiveProp<Spacing>;
  marginBottom?: ResponsiveProp<Spacing>;
  marginLeft?: ResponsiveProp<HorizontalSpacing>;
  marginRight?: ResponsiveProp<HorizontalSpacing>;
  paddingTop?: ResponsiveProp<VerticalPadding>;
  paddingBottom?: ResponsiveProp<VerticalPadding>;
  paddingLeft?: ResponsiveProp<HorizontalSpacing>;
  paddingRight?: ResponsiveProp<HorizontalSpacing>;
  display?: ResponsiveProp<Display>;
  flexDirection?: ResponsiveProp<FlexDirection>;
  borderRadius?: BorderRadius;
  backgroundColor?: BackgroundColor;
  boxShadow?: BoxShadow;
  transform?: Transform;
  transition?: Transition;
  minHeight?: IconSize;
  width?: Width;
}

export const Box = ({
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  display,
  flexDirection,
  borderRadius,
  backgroundColor,
  boxShadow,
  transition,
  transform,
  minHeight,
  width,
  className,
  ...restProps
}: BoxProps) => {
  const { atoms } = useTheme();

  return (
    <Reset
      className={useClassNames(
        className,
        styles.backgroundColors[backgroundColor!],
        styles.boxShadow[boxShadow!],
        styles.borderRadius[borderRadius!],
        styles.transition[transition!],
        getResponsiveClassRefs(styles.marginTop, marginTop),
        getResponsiveClassRefs(styles.marginRight, marginRight),
        getResponsiveClassRefs(styles.marginBottom, marginBottom),
        getResponsiveClassRefs(styles.marginLeft, marginLeft),
        getResponsiveClassRefs(styles.paddingTop, paddingTop),
        getResponsiveClassRefs(styles.paddingRight, paddingRight),
        getResponsiveClassRefs(styles.paddingBottom, paddingBottom),
        getResponsiveClassRefs(styles.paddingLeft, paddingLeft),
        getResponsiveClassRefs(styles.display, display),
        getResponsiveClassRefs(styles.flexDirection, flexDirection),
        atoms.transform[transform!],
        atoms.minHeight[minHeight!],
        atoms.width[width!],
      )}
      {...restProps}
    />
  );
};
