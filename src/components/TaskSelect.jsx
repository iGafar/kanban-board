import React from "react";

export default function TaskSelect({ tasks, addTask, column }) {

  function selectTask(task, index) {
    addTask(task, column, index)
  }
  
  return (
    <ul className="task-select">
      {tasks.map((task, index) => {
        return (
          <li key={index} className="task-select__option" onClick={() => selectTask(task, index)}>
            {task.text}
          </li>
        );
      })}
    </ul>
  );
}
