import React from "react";

export default function TaskArea(props) {
  function handleChange(e) {
    props.setTask({ text: e.target.value });
  }

  return (
    <input
      style={{ fontSize: "inherit", borderRadius: "5px", padding: "8px" }}
      value={props.task.text}
      onChange={handleChange}
      name="task"
      placeholder="Введите новую задачу"
    />
  );
}
