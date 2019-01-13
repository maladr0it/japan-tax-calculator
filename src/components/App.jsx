import React, { useState } from "react";

import calculateTax from "../logic/calculateTax";
import Summary from "./Summary";
import SalaryInput from "./SalaryInput/SalaryInput";

const App = () => {
  const [incomeString, setIncomeString] = useState("4.2");
  const income = parseFloat(incomeString * 1e6 || 0);
  const taxData = calculateTax(income);

  return (
    <div>
      <SalaryInput
        incomeString={incomeString}
        income={income}
        onChange={setIncomeString}
      />
      <Summary income={income} {...taxData} />
    </div>
  );
};
export default App;
