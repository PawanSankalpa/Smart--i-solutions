import React, { useState } from 'react';
import '../styles/LoanCalculator.css';

export default function LoanCalculator() {
  const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [years, setYears] = useState(3); // Default 3 years
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  // Better format function that preserves decimals
  const formatNumber = (value) => {
    if (!value) return '';
    const [integer, decimal] = value.toString().split('.');
    const formattedInt = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return decimal ? `${formattedInt}.${decimal}` : formattedInt;
  };

  const handleAmountChange = (e) => {
    // Remove all non-digit except decimal point
    const cleaned = e.target.value.replace(/[^\d.]/g, '');
    setAmount(cleaned);
  };

  const calculateLoan = () => {
    const principal = parseFloat(amount);
    const annualRate = parseFloat(interestRate);
    const yearsInt = parseInt(years);

    if (!principal || !annualRate || !yearsInt) {
      setMonthlyPayment(null);
      setTotalPayment(null);
      setTotalInterest(null);
      return;
    }

    // Simple Interest
    const interest = principal * (annualRate / 100) * yearsInt;
    const total = principal + interest;
    const monthly = total / (yearsInt * 12);

    setTotalInterest(interest.toFixed(2));
    setTotalPayment(total.toFixed(2));
    setMonthlyPayment(monthly.toFixed(2));
  };

  return (
    <div className="loan-calculator">
      <h2>Sun Max Energy Loan Calculator</h2>

      <label>
        Loan Amount
        <input
          type="text"
          value={formatNumber(amount)}
          onChange={handleAmountChange}
          placeholder="Enter amount (LKR)"
        />
      </label>

      <label>
        Annual Interest Rate (%)
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="0.00"
        />
      </label>

      <label className="slider-label">
        Loan Term: <strong>{years} Years</strong>
        <div className="slider-container">
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="slider-axis"
          />
          <div className="ticks">
            {Array.from({ length: 10 }, (_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>
        </div>
      </label>

      <button onClick={calculateLoan}>Calculate</button>

      <hr />

      {monthlyPayment !== null ? (
        <>
          <div className="monthly-payment-block">
            <strong>Estimated Monthly Payment:</strong>
            <p className="payment">LKR {formatNumber(monthlyPayment)}</p>
          </div>

          <div className="results-container">
            <div className="result-block">
              <strong>Total Loan Amount</strong>
              <p>LKR {formatNumber(amount)}</p>
            </div>
            <div className="result-block">
              <strong>Total Interest</strong>
              <p>LKR {formatNumber(totalInterest)}</p>
            </div>
            <div className="result-block">
              <strong>Total Payment (with Interest)</strong>
              <p>LKR {formatNumber(totalPayment)}</p>
            </div>
            <div className="result-block">
              <strong>Loan Term</strong>
              <p>{years} Years</p>
            </div>
          </div>
        </>
      ) : (
        <div className="placeholder">Enter details to calculate your payment</div>
      )}
    </div>
  );
}
