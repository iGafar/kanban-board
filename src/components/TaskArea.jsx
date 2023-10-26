import React from "react";

export default function TaskArea(props) {
  function handleChange(e) {
    props.setTask({ text: e.target.value });
  }

  function handleKeyUp(e) {
    if(e.code === 'Enter') {
      props.addTask(props.task, "Backlog")
      props.setTask({ id: 0, text: "", description: "" });
      props.setAreaOpen(false)
    }
  }

  return (
    <input
      className="input"
      style={{ fontSize: "inherit", borderRadius: "5px", padding: "8px" }}
      value={props.task.text}
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      name="task"
      placeholder="Введите новую задачу"
    />
  );
}
