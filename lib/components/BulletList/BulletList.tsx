import React, { ReactNode, createContext, useMemo } from 'react';
import { Box } from '../Box/Box';
import { UseTextProps } from '../../hooks/typography';
import { UseStackItemProps } from '../Stack/Stack';

const defaultSize = 'standard';
const defaultSpace = 'medium';
interface BulletListContextValue {
  size: UseTextProps['size'];
  space: UseStackItemProps['space'];
}
export const BulletListContext = createContext<BulletListContextValue>({
  size: defaultSize,
  space: defaultSpace,
});

export interface BulletListProps {
  children: ReactNode;
  size?: UseTextProps['size'];
  space?: UseStackItemProps['space'];
}

export const BulletList = ({
  children,
  size = defaultSize,
  space = defaultSpace,
}: BulletListProps) => {
  const bulletListContextValue = useMemo(
    () => ({
      size,
      space,
    }),
    [size, space],
  );
  return (
    <BulletListContext.Provider value={bulletListContextValue}>
      <Box component="ul">{children}</Box>
    </BulletListContext.Provider>
  );
};
