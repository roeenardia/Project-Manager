import Tasks from "./Tasks";

import "./SelectedProject.css";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("he-IL", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  });

  return (
    <div className="project">
      <header>
        <div>
          <h1 className="project-name">{project.title}</h1>
        </div>
        <p>Due Date: {formattedDate}</p>
        <p>Description: {project.description}</p>
      </header>
      <button className="btn-delete-project" onClick={onDelete}>
        Delete
      </button>
      <div className="border"></div>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
