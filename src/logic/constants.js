// TODO: store these in a more user-friendly format, then convert
export const incomeTaxBrackets = [
  [0, 1.95e6, 0.05],
  [1.95e6, 3.3e6, 0.1],
  [3.3e6, 6.95e6, 0.2],
  [6.95e6, 9e6, 0.23],
  [9e6, 18e6, 0.33],
  [18e6, 40e6, 0.4],
  [40e6, null, 0.45]
];

export const prefecturalTaxRate = 0.04;
export const municipalTaxRate = 0.06;
