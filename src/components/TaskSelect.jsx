import React from "react";

export default function TaskSelect({ tasks, addTask, column }) {
  function selectTask(task, index) {
    addTask(task, column, index);
  }

  function handleSelect(e) {
    e.target.value = "";
  }

  return (
    <select className="task-select" onChange={handleSelect}>
      <option hidden></option>

      {tasks.map((task, index) => {
        return (
          <option
            key={index}
            className="task-select__option"
            onClick={() => selectTask(task, index)}
          >
            {task.text}
          </option>
        );
      })}
    </select>
  );
}
