import React from "react";
import styled from "styled-components";

const Slider = ({ value, min, max, onChange }) => {
  const handleChange = event => {
    const { value } = event.target;
    onChange(value / 1e6);
  };

  return (
    <StyledInput
      type="range"
      value={value}
      min={min}
      max={max}
      step={0.1e6}
      onChange={handleChange}
    />
  );
};

const StyledInput = styled.input`
  margin: 0;
  width: 100%;
`;

export default Slider;
