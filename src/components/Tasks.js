import NewTask from "./NewTask";

import "./Tasks.css";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2>Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && <p>this project does not have any tasks yet</p>}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span className="task-text">• {task.text}</span>
              <button onClick={() => onDelete(task.id)}>Clear</button>
            </li>
          ))}
          <div className="border"></div>
        </ul>
      )}
    </section>
  );
}
