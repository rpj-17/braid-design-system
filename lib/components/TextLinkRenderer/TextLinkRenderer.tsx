import React, { CSSProperties, useContext, ReactElement } from 'react';
import { useClassNames } from 'treat';
import ActionsContext from '../Actions/ActionsContext';
import { Text } from '../Text/Text';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import styles from './TextLinkRenderer.css.js';
import { useTheme } from '../private/ThemeContext';
import { baseReset } from '../Reset/Reset.treat';
import { borderRadius } from '../Box/Box.treat';

interface StyleProps {
  style: CSSProperties;
  className: string;
}

export interface TextLinkRendererProps {
  inline?: boolean;
  children: (styleProps: StyleProps) => ReactElement;
}

export const TextLinkRenderer = ({
  inline = false,
  children,
}: TextLinkRendererProps) => {
  const { atoms } = useTheme();
  const inActions = useContext(ActionsContext);
  const defaultStyles = [styles.root, baseReset, atoms.color.link];

  if (inline) {
    return children({
      style: {},
      className: useClassNames(defaultStyles),
    });
  }

  const touchableStyles = [
    atoms.paddingTop.standardTouchableText,
    atoms.paddingBottom.standardTouchableText,
  ];

  if (inActions) {
    const actionStyles = [
      styles.root_isButton,
      atoms.display.block,
      atoms.width.full,
      atoms.paddingLeft.small,
      atoms.paddingRight.small,
      borderRadius.standard,
    ];

    return (
      <Text baseline={false}>
        <span className={styles.overlayContainer}>
          {children({
            style: {},
            className: useClassNames(
              defaultStyles,
              touchableStyles,
              actionStyles,
            ),
          })}
          <FieldOverlay variant="focus" className={styles.focusOverlay} />
        </span>
      </Text>
    );
  }

  return (
    <Text baseline={false}>
      {children({
        style: {},
        className: useClassNames(
          defaultStyles,
          touchableStyles,
          atoms.display.inlineBlock,
        ),
      })}
    </Text>
  );
};
