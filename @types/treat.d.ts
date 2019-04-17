declare module 'treat/theme' {
  interface BackgroundColorParams {
    input: string;
    inputDisabled: string;
    brandAccent: string;
    formAccent: string;
    formAccentDisabled: string;
    selection: string;
    info: string;
    card: string;
    critical: string;
  }

  interface BorderRadiusParams {
    standard: string;
  }

  interface ColorParams {
    link: string;
    linkHover?: string;
    black: string;
    white: string;
    critical: string;
    positive: string;
    secondary: string;
    brandAccent: string;
    formAccent: string;
    neutral: string;
  }

  interface FillParams {
    formAccent: string;
    formAccentDisabled: string;
    critical: string;
    positive: string;
    secondary: string;
    white: string;
  }

  interface FontFamilyParams {
    fontFamily: string;
  }

  type BoxShadowParams = Record<
    'outlineFocus' | 'borderStandard' | 'borderFormAccent' | 'borderCritical',
    string
  >;

  interface FontWeightParams {
    regular: number;
    medium: number;
    strong: number;
  }

  interface TransformParams {
    touchable: string;
  }

  export interface Theme {
    tokens: import('../lib/themes/theme').Tokens;
    backgroundColor: BackgroundColorParams;
    borderRadius: BorderRadiusParams;
    color: ColorParams;
    fill: FillParams;
    fontFamily: FontFamilyParams;
    boxShadow: BoxShadowParams;
    fontWeight: FontWeightParams;
    transform: TransformParams;
  }
}
