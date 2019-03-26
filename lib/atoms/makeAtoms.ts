import merge from 'lodash/merge';
import partition from 'lodash/partition';
import pick from 'lodash/pick';

import { Tokens } from '../themes/theme';
import { Css } from './types';

import makeColors, { ColorParams } from './color/makeColors';
import makeFontWeight, { FontWeightParams } from './font/makeFontWeights';
import makeFontFamily, { FontFamilyParams } from './font/makeFontFamily';
import makePadding from './makePadding';
import makeTransforms, { TransformParams } from './makeTransforms';
import makeSizes from './makeSizes';
import makeFlexDirections from './makeFlexDirections';
import makeFontSizes from './font/makeFontSizes';
import makeFills, { FillParams } from './color/makeFills';

const makeAtoms = (
  tokens: Tokens,
  colors: ColorParams,
  fills: FillParams,
  fontFamily: FontFamilyParams,
  borderRadius: {},
  boxShadows: {},
  fontWeights: FontWeightParams,
  backgroundColor: {},
  transforms: TransformParams,
): Css => {
  const rules = merge(
    makeFontSizes(tokens),
    makeColors(colors),
    makeFills(fills),
    makeFontFamily(fontFamily),
    makeFontWeight(fontWeights),
    makeSizes(tokens),
    makePadding(tokens),
    makeTransforms(tokens, transforms),
    makeFlexDirections(tokens),
  );

  const [queryRules, regularRules] = partition(Object.keys(rules), ruleName =>
    ruleName.startsWith('@'),
  );

  // Include media queries last to ensure higher specificity
  return {
    ...pick(rules, regularRules),
    ...pick(rules, queryRules),
  };
};

export default makeAtoms;
