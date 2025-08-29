import React, { useState } from 'react';
import '../styles/LoanCalculator.css';

export default function LoanCalculator() {
  const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [years, setYears] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const formatNumber = (value) => {
    // Remove all non-digits
    const numericValue = value.replace(/\D/g, '');
    // Format with commas
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleAmountChange = (e) => {
    setAmount(formatNumber(e.target.value));
  };

  const calculateLoan = () => {
    const principal = parseFloat(amount.replace(/,/g, ''));
    const rate = parseFloat(interestRate) / 100 / 12;
    const n = parseInt(years) * 12;

    if (!principal || !rate || !n) {
      setMonthlyPayment(null);
      return;
    }

    const payment =
      (principal * rate * Math.pow(1 + rate, n)) /
      (Math.pow(1 + rate, n) - 1);

    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="loan-calculator">
      <h2>Solar Loan Calculator</h2>

      <label>
        Loan Amount
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
        />
      </label>

      <label>
        Annual Interest Rate (%)
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="e.g. 8.5"
        />
      </label>

      <label>
        Loan Term (Years)
        <select value={years} onChange={(e) => setYears(e.target.value)}>
          <option value="">Select years</option>
          <option value="1">1 Years</option>
          <option value="2">2 Years</option>
          <option value="3">3 Years</option>
          <option value="4">4 Years</option>
          <option value="5">5 Years</option>
          <option value="6">6 Years</option>
          <option value="7">7 Years</option>
          <option value="8">8 Years</option>
          <option value="9">9 Years</option>
          <option value="10">10 Years</option>
          <option value="11">11 Years</option>
          <option value="12">12 Years</option>
          <option value="13">13 Years</option>
          <option value="14">14 Years</option>
          <option value="15">15 Years</option>
          <option value="16">16 Years</option>
          <option value="17">17 Years</option>
          <option value="18">18 Years</option>
          <option value="19">19 Years</option>
          <option value="20">20 Years</option>
        </select>
      </label>

      <button onClick={calculateLoan}>Calculate</button>

      <hr />

      {monthlyPayment !== null ? (
        <div className="result">
          <strong>Estimated Monthly Payment:</strong>
          <div className="payment">LKR {monthlyPayment}</div>
        </div>
      ) : (
        <div className="placeholder">Enter details to calculate your payment</div>
      )}
    </div>
  );
}
