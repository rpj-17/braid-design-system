import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import * as styleRefs from './Divider.treat';
import { Space } from '../../hooks/useBox';

interface DividerProps {
  space?: Space;
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
