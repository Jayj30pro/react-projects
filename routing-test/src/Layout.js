import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header>
        <h1>Routing Test</h1>
        <nav style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}