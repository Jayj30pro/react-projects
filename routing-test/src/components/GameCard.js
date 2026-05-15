import { Link } from "react-router-dom";
import "../App.css";


export default function GameCard({game}) {
    
    return (
        <div className="game-card">
            <h3>{game.name}</h3>
            <p>Genre: {game.genre}</p>
            <p>Status: {game.status}</p>
            <p>small game image here</p>

            <Link to={`/games/${game.id}`} className="game-link">View Details</Link>
        </div>
    )
}
