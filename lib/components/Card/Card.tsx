import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';
import { Container, StackProps } from '../Stack/Stack';

export interface CardProps {
  children?: ReactNode;
  space?: StackProps['space'];
  gutter?: StackProps['space'];
  divider?: boolean;
}

export const Card = ({ children, space, gutter, divider }: CardProps) => (
  <Box background="card">
    <Container space={space} gutter={gutter} divider={divider}>
      {children}
    </Container>
  </Box>
);
