import { Link, Outlet, OUtlet} from "react-router-dom";

export default function Arcade() {
  return (
    <div>
        <h1>Arcade</h1>
        <Link to="coincollector">Coin Collector</Link>
        <Outlet />
    </div>
  );
}
