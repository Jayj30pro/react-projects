import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const navStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "red" : "black",
    textDecoration: "none",
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Router Lab</h1>

      <nav style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <NavLink to="/" style={navStyle}>Home</NavLink>
        <NavLink to="/about" style={navStyle}>About</NavLink>
        <NavLink to="/projects" style={navStyle}>Projects</NavLink>
        <NavLink to="/contact" style={navStyle}>Contact</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}