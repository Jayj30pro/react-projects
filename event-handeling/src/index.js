import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function MathForm() {
  const [year, setYear] = useState(2026);
  const [product, setProduct] = useState(1);
  const [num, setNum] = useState(0);


  function handleChange(e) {
    setYear(e.target.value);
  }

  function getAge(year) {
    return (2026 - year);
  }

  function handleMath(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    if (Number(num) != 0){
      setProduct(product * Number(num));
      e.preventDefault();
    }
    else {
      alert("no multiplying by zero");
    }
    
  }

  return <div>
    <input type='text' value={year} onChange={handleChange} />
    <p> Since you were born in {year} you are {getAge(year)} years old </p>
    <input type='number' value={num} onChange={handleMath} />
    <button onClick={handleSubmit}>Multiply</button>
    <p> The product is {product} </p>
    <p> The number in the system is {num} </p>
  </div>

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MathForm />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
