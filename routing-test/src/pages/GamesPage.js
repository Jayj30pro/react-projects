import { Link } from "react-router-dom";
import games from "../data/games";
import GameCard from "../components/GameCard";
import "../App.css";

export default function GamesPage(){



    return (
        <div className="games-page">
            <h2>Games Page</h2>

            <div className="games-grid">
                {games.map((game) => (
                <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
}

