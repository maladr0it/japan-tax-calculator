import {
  incomeTaxBrackets,
  prefecturalTaxRate,
  municipalTaxRate
} from "./constants";

const calculateIncomeTax = (remaining, brackets) => {
  const [lowerBound, rate] = brackets[0];
  // if it's the last bracket
  if (brackets.length === 1) {
    return [remaining * rate, rate];
  }
  const [upperBound] = brackets[1];
  const bracketRange = upperBound - lowerBound;
  // if this is the last bracket reached
  if (remaining <= bracketRange) {
    return [remaining * rate, rate];
  }

  const taxForBracket = bracketRange * rate;
  const [taxForNextBrackets, highestBracket] = calculateIncomeTax(
    remaining - bracketRange,
    brackets.slice(1)
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

export const getTotalTaxBrackets = () => {
  return incomeTaxBrackets.reduce((acc, [lowerBound, rate]) => {
    const totalRate = rate + prefecturalTaxRate + municipalTaxRate;
    acc.push([lowerBound, totalRate]);
    return acc;
  }, []);
};

export default calculateTax;
