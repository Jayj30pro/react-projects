import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Agerater() {
  const [year, setYear] = useState(2026);

  function handleChange(e) {
    setYear(e.target.value);
  }

  function getAge(year) {
    return (2026 - year);
  }

  return <div>
    <input type='text' value={year} onChange={handleChange} />
    <p> Since you were born in {year} you are {getAge(year)} years old </p>
  </div>

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Agerater />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
