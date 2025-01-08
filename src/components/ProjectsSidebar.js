import Button from "../Elements/Button";

import "./ProjectsSidebar.css";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="sidebar-panel">
      <h2>Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul>
        {projects.map((projects) => {
          return (
            <li key={projects.id}>
              <button
                onClick={() => onSelectProject(projects.id)}
                className="project-title"
              >
                {projects.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
