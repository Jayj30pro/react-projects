import { useSearchParams } from "react-router-dom";
import games from "../data/games";

export default function SearchCenter() {
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get("q") || "";
    const status = searchParams.get("status") || "";
    const genre =  searchParams.get("genre") || "";

    const filteredGames = games.filter((game) => {
        const matchesQuery = game.name.toLowerCase().includes(query.toLowerCase());
        const matchesStatus = status ? game.status === status : true;
        const matchesGenre =  genre ? game.genre === genre : true;
        
        return matchesQuery && matchesStatus && matchesGenre;          
    });

  function handleQueryChange(e) {
    const newQuery = e.target.value;

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (newQuery) {
        params.set("q", newQuery);
      } else {
        params.delete("q");
      }

      return params;
    });
  }

  function handleStatusChange(e) {
    const newStatus = e.target.value;

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (newStatus) {
        params.set("status", newStatus);
      } else {
        params.delete("status");
      }

      return params;
    });
  }
  
  function handleGenreChange(e) {
    const newGenre = e.target.value;

    setSearchParams((prev) => {
        const params = new URLSearchParams(prev);

        if(newGenre) {
            params.set("genre", newGenre);
        } else {
            params.delete("genre");
        }

        return params;
    })
  }

  return (
    <div>
      <h2>Search Center</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by game name"
          value={query}
          onChange={handleQueryChange}
          style={{ marginRight: "12px" }}
        />

        <select value={status} onChange={handleStatusChange}>
          <option value="">All Statuses</option>
          <option value="Released">Released</option>
          <option value="In Progress">In Progress</option>
          <option value="Planned">Planned</option>
          <option value="Future">Future</option>
          <option value="Beyond">Beyond</option>
        </select>

        <p>Search by genre</p>
        <select value={genre} onChange={handleGenreChange}>
            <option value="">All Genres</option>
            <option value="Racing">Racing</option>
            <option value="Arcade">Arcade</option>
            <option value="Driving">Driving</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option>
        </select>
      </div>

      <ul>
        {filteredGames.map((game) => (
          <li key={game.id}>
            <strong>{game.name}</strong> - {game.genre} - {game.status}
          </li>
        ))}
      </ul>

      {filteredGames.length === 0 && <p>No games found.</p>}
    </div>
  );
}