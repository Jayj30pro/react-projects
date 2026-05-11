import { Link } from "react-router-dom";
import "../App.css";


export default function GameCard({game}) {
    
    return (
        <div className="game-card">
            <p>game image here</p>

            <h3>{game.name}</h3>
            <p>Genre: {game.genre}</p>
            <p>Status: {game.status}</p>

            <Link to={`/games/${game.id}`} className="game-link">View Details</Link>
        </div>
    )
}
