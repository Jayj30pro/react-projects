import { Link } from "react-router-dom";

const projects = [
  { id: "coldflare", name: "ColdFlare Studios" },
  { id: "website5", name: "Website 5" },
  { id: "neonapex", name: "Neon Apex" },
];

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}