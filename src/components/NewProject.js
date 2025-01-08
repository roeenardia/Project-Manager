import { use, useRef } from "react";

import Input from "./Input";
import Button from "../Elements/Button";
import Modal from "./Modal";

import "./NewProject.css";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2>Ivalid Input</h2>
        <p>Oops... looks like you forgot to enter a value</p>
        <p>Please make sure you enter a valid value for every input field</p>
      </Modal>
      <div>
        <menu className="menu">
          <li>
            <button className="btn-cancel" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button className="btn-save" onClick={handleSave}>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
