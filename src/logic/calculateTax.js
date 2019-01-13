import {
  incomeTaxBrackets,
  prefecturalTaxRate,
  municipalTaxRate
} from "./constants";

const getTotalTaxBrackets = () => {
  return incomeTaxBrackets.reduce((acc, [lowerBound, upperBound, rate]) => {
    const totalRate = rate + prefecturalTaxRate + municipalTaxRate;
    acc.push([lowerBound, upperBound, totalRate]);
    return acc;
  }, []);
};

const calculateIncomeTax = (remaining, brackets) => {
  const [[lowerBound, upperBound, rate], ...nextBrackets] = brackets;
  const bracketRange = upperBound - lowerBound;
  // if it's the last bracket OR if this is the last bracket reached
  if (nextBrackets.length === 0 || remaining <= bracketRange) {
    return [remaining * rate, rate];
  }
  const taxForBracket = bracketRange * rate;
  const [taxForNextBrackets, highestBracket] = calculateIncomeTax(
    remaining - bracketRange,
    nextBrackets
  );
  return [taxForBracket + taxForNextBrackets, highestBracket];
};

const calculateTax = income => {
  const [incomeTax, incomeTaxBracket] = calculateIncomeTax(
    income,
    incomeTaxBrackets
  );

  const prefecturalTax = prefecturalTaxRate * income;
  const municipalTax = municipalTaxRate * income;
  const currentTaxRate =
    incomeTaxBracket + prefecturalTaxRate + municipalTaxRate;
  const totalTax = incomeTax + prefecturalTax + municipalTax;
  const totalTaxPercent = income === 0 ? 0 : totalTax / income;
  const netIncome = income - totalTax;

  return {
    netIncome,
    totalTaxPercent,
    currentTaxRate
  };
};

export const totalTaxBrackets = getTotalTaxBrackets();

export default calculateTax;
