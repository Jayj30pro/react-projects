import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


function Trafficlight() {
  const [light, setLight] = useState(true);

  function transition() {
    setLight(prev => !prev);
  }

  return (
    <div className={light ? 'day' : 'night'}>
      <p>The light is {light ? 'on' : 'off'}</p>
      <button onClick={transition}>Change the light</button>
      <div className={light ? 'go' : 'stop'}></div>
    </div>
  );

}

root.render(<Trafficlight />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
