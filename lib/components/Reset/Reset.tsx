import { createElement, ReactType, AllHTMLAttributes } from 'react';
import { useClassNames } from 'treat';
import { baseReset, specificResets } from './Reset.treat';

export interface ResetProps extends AllHTMLAttributes<HTMLElement> {
  component?: ReactType;
}

export const Reset = ({
  component = 'div',
  className,
  ...restProps
}: ResetProps) =>
  createElement(component, {
    className: useClassNames(
      className,
      baseReset,
      specificResets[component as keyof typeof specificResets],
    ),
    ...restProps,
  });
