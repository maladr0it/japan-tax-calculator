import React from "react";
import styled from "styled-components";

const Summary = ({ income, netIncome, totalTaxPercent, currentTaxRate }) => (
  <div>
    <h1>SUMMARY</h1>
    <ul>
      <li>income: ¥{income.toLocaleString()}</li>
      <li>net income: ¥{netIncome.toLocaleString()}</li>
      <li>total tax percentage: {(totalTaxPercent * 100).toFixed(2)}%</li>
      <li>current tax rate: {(currentTaxRate * 100).toFixed(0)}%</li>
    </ul>
  </div>
);

export default Summary;
