import React, { useEffect, useRef, useState } from 'react';
import './CoinCollector.css';

export default function CoinCollector() {
  const canvasRef = useRef(null);
  const directionRef = useRef(0);
  const animationRef = useRef(null);

  const [score, setScore] = useState(0);

  useEffect(() => {
    const frame = canvasRef.current;
    const screen = frame.getContext('2d');

    let x = 125;
    let y = 75;

    let coinx = Math.random() * 275;
    let coiny = Math.random() * 175;

    let time = Date.now();
    const speed = 100;
    let currentScore = 0;

    function handleKeyDown(event) {
      const name = event.key;
      if (name === 'ArrowRight') directionRef.current = 1;
      if (name === 'ArrowLeft') directionRef.current = 2;
      if (name === 'ArrowUp') directionRef.current = 3;
      if (name === 'ArrowDown') directionRef.current = 4;
    }

    function handleKeyUp(event) {
      const name = event.key;
      if (
        name === 'ArrowRight' ||
        name === 'ArrowLeft' ||
        name === 'ArrowUp' ||
        name === 'ArrowDown'
      ) {
        directionRef.current = 0;
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    function boxie() {
      const timeLapsed = (Date.now() - time) / 1000;
      time = Date.now();

      screen.clearRect(0, 0, 300, 200);

      screen.beginPath();
      screen.font = '20px Times';
      screen.fillStyle = '#FFF';
      screen.fillText('Score: ' + currentScore, 15, 20);

      screen.beginPath();
      screen.rect(x, y, 50, 50);
      screen.fillStyle = '#064';
      screen.fill();

      screen.beginPath();
      screen.rect(coinx, coiny, 25, 25);
      screen.fillStyle = '#CF7';
      screen.fill();

      if (directionRef.current === 1) {
        if (x < 250) x += speed * timeLapsed;
      } else if (directionRef.current === 2) {
        if (x > 0) x -= speed * timeLapsed;
      } else if (directionRef.current === 3) {
        if (y > 0) y -= speed * timeLapsed;
      } else if (directionRef.current === 4) {
        if (y < 150) y += speed * timeLapsed;
      }

      if (coinx <= x + 50 && x <= coinx + 25 && coiny <= y + 50 && y <= coiny + 25) {
        currentScore++;
        setScore(currentScore);
        coinx = Math.random() * 275;
        coiny = Math.random() * 175;
      }

      animationRef.current = window.requestAnimationFrame(boxie);
    }

    boxie();

    return () => {
      window.cancelAnimationFrame(animationRef.current);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  function setDirection(dir) {
    directionRef.current = dir;
  }

  function clearDirection() {
    directionRef.current = 0;
  }

  return (
    <div className="coin-game">
      <h2>Coin Collector</h2>
      <p>Score: {score}</p>

      <canvas
        ref={canvasRef}
        className="frame"
        width="300"
        height="200"
      >
        Your browser does not support the HTML5 canvas tag.
      </canvas>

      <div className="controls">
        <button
          onMouseDown={() => setDirection(3)}
          onMouseUp={clearDirection}
          onMouseLeave={clearDirection}
          onTouchStart={(e) => {
            e.preventDefault();
            setDirection(3);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            clearDirection();
          }}
        >
          ↑
        </button>

        <div>
          <button
            onMouseDown={() => setDirection(2)}
            onMouseUp={clearDirection}
            onMouseLeave={clearDirection}
            onTouchStart={(e) => {
              e.preventDefault();
              setDirection(2);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              clearDirection();
            }}
          >
            ←
          </button>

          <button
            onMouseDown={() => setDirection(4)}
            onMouseUp={clearDirection}
            onMouseLeave={clearDirection}
            onTouchStart={(e) => {
              e.preventDefault();
              setDirection(4);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              clearDirection();
            }}
          >
            ↓
          </button>

          <button
            onMouseDown={() => setDirection(1)}
            onMouseUp={clearDirection}
            onMouseLeave={clearDirection}
            onTouchStart={(e) => {
              e.preventDefault();
              setDirection(1);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              clearDirection();
            }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
