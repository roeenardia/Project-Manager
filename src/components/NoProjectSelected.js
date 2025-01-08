import Button from "../Elements/Button";

import "./NoProjectSelected.css";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="no-project">
      <h2>No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <p>
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
