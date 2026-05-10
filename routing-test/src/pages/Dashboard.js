import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet />
    </div>
  );
}