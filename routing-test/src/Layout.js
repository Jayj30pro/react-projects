import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const navStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bolder" : "normal",
    color: isActive ? "#F80" : "#FFF",
    fontSize: isActive ? "30px" : "20px",
    textDecoration: "none",
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Router Test Lab 1</h1>

      <nav style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <NavLink to="/" style={navStyle}>Home</NavLink>
        <NavLink to="/about" style={navStyle}>About</NavLink>
        <NavLink to="/games" style={navStyle}>Games</NavLink>
        <NavLink to="/projects" style={navStyle}>Projects</NavLink>
        <NavLink to="/contact" style={navStyle}>Contact</NavLink>
        <NavLink to="/search" style={navStyle}>Search</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}