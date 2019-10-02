import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import * as styleRefs from './Divider.treat';
import { Space } from '../Box/useBoxStyles';

type ResponsiveSpace = Space | [Space, Space];
interface DividerProps {
  space?: ResponsiveSpace;
}

export const Divider = ({ space }: DividerProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box position="relative" paddingY={space}>
      <Box
        position="absolute"
        boxShadow="borderStandard"
        width="full"
        className={styles.divider}
      />
    </Box>
  );
};
