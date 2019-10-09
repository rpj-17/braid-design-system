import React, { Children, ReactNode } from 'react';
import { useStyles } from 'sku/treat';
import { ResponsiveSpace } from '../Box/useBoxStyles';
import { Box } from '../Box/Box';
import * as styleRefs from './Inline.treat';

export interface InlineProps {
  space: ResponsiveSpace;
  children: ReactNode;
}

export const Inline = ({ space = 'none', children }: InlineProps) => {
  const childrenArray = Children.toArray(children);
  const styles = useStyles(styleRefs);

  return (
    <Box className={styles.root}>
      <Box className={styles.offsetY[space]} />
      <Box display="flex" style={{ flexWrap: 'wrap' }}>
        {childrenArray.map((child, i) => (
          <Box
            paddingRight={i < childrenArray.length - 1 ? space : undefined}
            marginTop={space}
          >
            {child}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
