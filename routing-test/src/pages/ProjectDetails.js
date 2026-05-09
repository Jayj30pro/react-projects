import { useParams, useNavigate } from "react-router-dom";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Project Details</h2>
      <p>You are viewing project: {projectId}</p>

      <button onClick={() => navigate("/projects")}>
        Back to Projects
      </button>
    </div>
  );
}