import React from "react";

import NumberInput from "./NumberInput";
import Slider from "./Slider";
import BracketNotches from "./BracketNotches";

const SalaryInput = ({ income, incomeString, onChange }) => {
  const sliderMax = 50e6;
  return (
    <div>
      <h1>Input salary ¥(millions)</h1>
      <div>
        <NumberInput value={incomeString} onChange={onChange} />
      </div>
      <div>
        <Slider value={income} min={0} max={sliderMax} onChange={onChange} />
      </div>
      <BracketNotches max={sliderMax} />
    </div>
  );
};

export default SalaryInput;
