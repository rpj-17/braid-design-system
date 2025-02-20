export type ResponsiveProp<AtomName> = AtomName | [AtomName, AtomName];
export const resolveResponsiveProp = <Keys extends string>(
  value: ResponsiveProp<Keys>,
  mobileAtoms: Record<Keys, string>,
  desktopAtoms: Record<Keys, string>,
) => {
  if (typeof value === 'string') {
    return mobileAtoms[value!];
  } else if (value instanceof Array) {
    const [mobileValue, desktopValue] = value;
    return mobileValue !== desktopValue
      ? [mobileAtoms[mobileValue!], desktopAtoms[desktopValue!]]
      : mobileAtoms[mobileValue!];
  }
};
