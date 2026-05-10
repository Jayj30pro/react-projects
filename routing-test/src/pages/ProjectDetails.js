import { useParams, useNavigate } from "react-router-dom";

const projectData = {
  coldflare: {
    title: "ColdFlare Studios",
    description: "Game studio brand and future home for demos and dev logs.",
  },
  website5: {
    title: "Website 5",
    description: "Personal site focused on game design and ColdFlare.",
  },
  neonapex: {
    title: "Neon Apex",
    description: "Top-down driving game with arcade style progression.",
  },
};

export default function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectData[projectId];

  if (!project) {
    return (
      <div>
        <h2>Project not found</h2>
        <button onClick={() => navigate("/projects")}>Back to Projects</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <button onClick={() => navigate("/projects")}>Back to Projects</button>
    </div>
  );
}