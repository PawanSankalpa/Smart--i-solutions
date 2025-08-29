import React, { useState, useMemo } from "react";
import "../styles/LoanCalculator.css";

const LoanCalculator = () => {
  const [loanData, setLoanData] = useState({
    principal: 500000,
    interestRate: 5,
    years: 5
  });

  // Format number with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Parse formatted number back to raw number
  const parseFormattedNumber = (formattedNum) => {
    return Number(formattedNum.replace(/,/g, ''));
  };

  const handleInputChange = (field, value) => {
    if (field === "principal") {
      // Remove commas and parse to number
      const numericValue = parseFormattedNumber(value);
      setLoanData(prev => ({
        ...prev,
        [field]: numericValue
      }));
    } else {
      setLoanData(prev => ({
        ...prev,
        [field]: Number(value)
      }));
    }
  };

  const { monthlyPayment, totalPayment, totalInterest } = useMemo(() => {
    const { principal, interestRate, years } = loanData;
    const monthlyRate = interestRate / 100 / 12;
    const months = years * 12;
    
    if (principal <= 0 || interestRate <= 0 || years <= 0) {
      return { monthlyPayment: 0, totalPayment: 0, totalInterest: 0 };
    }
    
    const monthlyPayment = 
      (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principal;
    
    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2)
    };
  }, [loanData]);

  return (
    <div id="loancalculator" className="loan-calculator">
      <h2>Solar Loan Calculator</h2>
      <p className="calculator-description">
        Estimate your monthly payments for a solar system with our easy-to-use calculator
      </p>

      <div className="input-group">
        <label htmlFor="loan-amount">Loan Amount (LKR)</label>
        <div className="input-with-slider">
          <input
            id="loan-amount"
            type="text"
            value={formatNumber(loanData.principal)}
            onChange={(e) => {
              // Allow only numbers and commas
              const value = e.target.value.replace(/[^0-9,]/g, '');
              handleInputChange("principal", value);
            }}
            onBlur={(e) => {
              // Ensure the value is properly formatted on blur
              if (e.target.value === '') {
                handleInputChange("principal", "10000");
              }
            }}
          />
          <input
            type="range"
            min="10000"
            max="10000000"
            step="10000"
            value={loanData.principal}
            onChange={(e) => handleInputChange("principal", e.target.value)}
            className="slider"
          />
          <div className="range-labels">
            <span>LKR 10,000</span>
            <span>LKR 10,000,000</span>
          </div>
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="interest-rate">Interest Rate (%)</label>
        <div className="input-with-slider">
          <input
            id="interest-rate"
            type="number"
            min="0.1"
            max="30"
            step="0.1"
            value={loanData.interestRate}
            onChange={(e) => handleInputChange("interestRate", e.target.value)}
          />
          <input
            type="range"
            min="0.1"
            max="30"
            step="0.1"
            value={loanData.interestRate}
            onChange={(e) => handleInputChange("interestRate", e.target.value)}
            className="slider"
          />
          <div className="range-labels">
            <span>0.1%</span>
            <span>30%</span>
          </div>
        </div>
      </div>

      <div className="input-group years-selector">
        <label>Loan Term (Years)</label>
        <div className="x-axis">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((year) => (
            <button
              key={year}
              type="button"
              className={`term-option ${loanData.years === year ? "active" : ""}`}
              onClick={() => handleInputChange("years", year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="result-card">
        <h3>Your Loan Estimate</h3>
        <div className="result-item">
          <span>Monthly Payment:</span>
          <span className="highlight">LKR {formatNumber(monthlyPayment)}</span>
        </div>
        <div className="result-item">
          <span>Total Payment:</span>
          <span>LKR {formatNumber(totalPayment)}</span>
        </div>
        <div className="result-item">
          <span>Total Interest:</span>
          <span>LKR {formatNumber(totalInterest)}</span>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;