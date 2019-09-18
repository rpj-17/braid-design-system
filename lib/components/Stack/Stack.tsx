import React, { ReactNode, Children, Fragment, createElement } from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/treat';
import { Divider } from '../Divider/Divider';
import useBox, { Space, UseBoxProps } from '../../hooks/useBox';
import * as styleRefs from './Stack.treat';

export interface StackProps {
  children: ReactNode;
  space?: Space;
  divider?: boolean;
}

export interface UseStackProps {
  component: UseBoxProps['component'];
  space: Space | undefined;
}

export const useStackItem = ({ component, space }: UseStackProps) => {
  const styles = useStyles(styleRefs);

  return classnames(
    useBox({ component, paddingBottom: space }),
    styles.excludingLast,
  );
};

export const Stack = ({
  children,
  space = 'gutter',
  divider = false,
}: StackProps) => {
  const itemComponent = 'div';
  const stackClasses = useStackItem({
    component: itemComponent,
    space,
  });
  const stackItems = Children.toArray(children);

  if (stackItems.length <= 1 || (space === 'none' && !divider)) {
    return <Fragment>{children}</Fragment>;
  }

  const stackChildren = stackItems.map((child, index) =>
    createElement(itemComponent, {
      className: divider ? undefined : stackClasses,
      children: [
        child,
        divider && index !== stackItems.length - 1 ? (
          <Divider space={space} />
        ) : null,
      ],
    }),
  );

  return createElement('div', {
    children: stackChildren,
  });
};
