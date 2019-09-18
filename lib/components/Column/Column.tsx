import React, { ReactNode, useContext } from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { ColumnsContext } from '../Columns/Columns';
import * as styleRefs from './Column.treat';
import { StackProps, Stack } from '../Stack/Stack';

export interface ColumnProps {
  children: ReactNode;
  width?: keyof typeof styleRefs.width;
  space?: StackProps['space'];
}

export const Column = ({ children, width, space }: ColumnProps) => {
  const styles = useStyles(styleRefs);
  const { collapse, gutter } = useContext(ColumnsContext);

  return (
    <Box
      width={width !== 'content' ? 'full' : undefined}
      className={classnames(styles.column, styles.width[width!])}
    >
      <Box paddingLeft={[collapse ? 'none' : gutter, gutter]}>
        <Stack space={space}>{children}</Stack>
      </Box>
    </Box>
  );
};
