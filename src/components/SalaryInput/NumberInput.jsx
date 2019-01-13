import React from "react";

const handleFocus = event => event.target.select();

const NumberInput = ({ value, onChange }) => {
  const handleChange = event => {
    const { value } = event.target;
    // Disallow all non-numbers, but allow an empty string for cosmetic reasons
    if (!isNaN(value) || value === "") {
      onChange(value);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
    />
  );
};

export default NumberInput;
