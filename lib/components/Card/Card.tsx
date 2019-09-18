import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';
import { Stack, StackProps } from '../Stack/Stack';

export interface CardProps {
  children?: ReactNode;
  space?: StackProps['space'];
  gutter?: StackProps['space'];
}

export const Card = ({ children, space, gutter = 'gutter' }: CardProps) => (
  <Box background="card" paddingY={space || gutter} paddingX={gutter}>
    <Stack space={space}>{children}</Stack>
  </Box>
);
