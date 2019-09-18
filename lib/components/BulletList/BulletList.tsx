import React, { ReactNode, createContext, useMemo } from 'react';
import { Box } from '../Box/Box';
import { UseTextProps } from '../../hooks/typography';
import { UseStackProps } from '../Stack/Stack';

const defaultSize = 'standard';
const defaultSpace = 'medium';
interface BulletListContext {
  size: UseTextProps['size'];
  space: UseStackProps['space'];
}
export const BulletListContext = createContext<BulletListContext>({
  size: defaultSize,
  space: defaultSpace,
});

export interface BulletListProps {
  children: ReactNode;
  size?: UseTextProps['size'];
  space?: UseStackProps['space'];
}

export const BulletList = ({
  children,
  size = defaultSize,
  space = defaultSpace,
}: BulletListProps) => {
  const bulletListContextValues = useMemo(
    () => ({
      size,
      space,
    }),
    [size, space],
  );
  return (
    <BulletListContext.Provider value={bulletListContextValues}>
      <Box component="ul">{children}</Box>
    </BulletListContext.Provider>
  );
};
