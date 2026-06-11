import React, { useEffect, useRef, useState } from 'react';
import './RockPaperScissors.css';
import rock from '../images/rock.jpeg';
import paper from '../images/paper.jpeg';
import scissors from '../images/scissors.jpeg';

export default function RockPaperScissors() {


    // let palyerChoice = "";
    const [palyerChoice, setPalyerChoice] = useState("");
    // let info =  document.getElementById("message");
    const [info, setInfo] = useState("Make your selection");
    const [decision, setDecision] = useState("");
    const [results, setResults] = useState("");



    function test() {
        setInfo("this is just a test");
    }

    function playerSelect(choice) {
    setInfo(`You selected ${choice}`);
    setPalyerChoice(choice);
    computerSelect(choice);
    }

    function computerSelect(playerChoice) {
        let choices = ["rock", "paper", "scissors"];
        let computerChoice = choices[Math.floor(Math.random() * 3)];
        setDecision(`The computer chose ${computerChoice}`);
        findWinner(playerChoice, computerChoice);
    }

    function findWinner(playerChoice, computerChoice) {
        if (computerChoice === playerChoice) {
            setResults("It is a tie!");
        } else if (computerChoice === "rock" && playerChoice === "paper") {
            setResults("You win!");
        } else if (computerChoice === "paper" && playerChoice === "scissors") {
            setResults("You win!");
        } else if (computerChoice === "scissors" && playerChoice === "rock") {
            setResults("You win!");
        } else {
            setResults("The computer wins");
        }
    }


    return (
       <div id="game-area">
        
        <div id="rock" className="game-option" onClick={()=> playerSelect('rock')}>
            <img src={rock} className="game-icon" alt="rock"/>
            <div className="game-button"><button> Rock </button></div>
        </div>
    
        <div id="paper" className="game-option" onClick={()=> playerSelect('paper')}>
            <img src={paper} className="game-icon" alt="paper"/>
            <div className="game-button"><button> Paper </button></div>
        </div>
    
        <div id="scissors" className="game-option" onClick={()=> playerSelect('scissors')}>
            <img src={scissors} className="game-icon" alt="scissors"/>
            <div className="game-button"><button> Scissors </button></div>
        </div>

        <div id="text-area">
            <div id="message" className="display-text">{info} </div>
            <div id="computer-selection" className="display-text">{decision}</div>
            <div id="results" className="display-text">{results}</div>
        </div>

        <a href="./" id="back"><button> Back to the Arcade</button> </a>
    </div>  
    );

}
