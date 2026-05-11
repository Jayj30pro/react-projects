import { useParams, useNavigate } from "react-router-dom";
import games from "../data/games";
import "../App.css";

export default function GameDetails() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const game = games.find((g) => g.id === gameId);

  if (!game) {
    return <h2>Game not found</h2>;
  }

  return (
    <div>
      <h2>{game.name}</h2>
      <p>Genre: {game.genre}</p>
      <p>Status: {game.status}</p>
      <button onClick={() => navigate("/games")}>Back to games</button>
    </div>
  );
}