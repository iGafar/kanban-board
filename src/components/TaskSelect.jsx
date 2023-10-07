import React from "react";

export default function TaskSelect({ tasks, addTask, column }) {

  function selectTask(task) {
    addTask(task, column)
  }
  
  return (
    <ul className="task-select">
      {tasks.map((task, index) => {
        return (
          <li key={index} className="task-select__option" onClick={() => selectTask(task)}>
            {task}
          </li>
        );
      })}
    </ul>
  );
}
