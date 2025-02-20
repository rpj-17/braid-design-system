import React, { ReactNode } from 'react';
import { TreatProvider } from 'sku/treat';
import { ensureResetImported } from '../../reset/resetTracker';
import ThemeNameContext from '../ThemeNameConsumer/ThemeNameContext';
import { Theme } from '../../themes/theme';

if (process.env.NODE_ENV === 'development') {
  ensureResetImported();
}

export interface BraidProviderProps {
  theme: Theme;
  styleBody?: boolean;
  children: ReactNode;
}

export const BraidProvider = ({
  theme,
  styleBody = true,
  children,
}: BraidProviderProps) => (
  <ThemeNameContext.Provider value={theme.name}>
    <TreatProvider theme={theme.treatTheme}>
      {styleBody ? (
        <style type="text/css">{`body{margin:0;padding:0;background:${theme.background}}`}</style>
      ) : null}
      {children}
    </TreatProvider>
  </ThemeNameContext.Provider>
);
