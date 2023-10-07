import React, { useState } from "react";
import plus from "../assets/images/add-card.svg";
import taskArrow from "../assets/images/taskArrow.svg";
import TaskArea from "./TaskArea";
import TaskSelect from "./TaskSelect";

export default function TaskBlock(props) {
  const [isAreaOpen, setAreaOpen] = useState(false);
  const [taskText, setTaskText] = useState("");

  function activityBlock() {
    if (props.name === "Backlog") {
      return <TaskArea text={taskText} setTaskText={setTaskText} />;
    } else if (props.name === "Ready") {
      return (
        <TaskSelect
          tasks={props.select}
          addTask={props.addTask}
          column="ready"
        />
      );
    } else if (props.name === "In Progress") {
      return (
        <TaskSelect
          tasks={props.select}
          addTask={props.addTask}
          column="in_progress"
        />
      );
    } else if (props.name === "Finished") {
      return (
        <TaskSelect
          tasks={props.select}
          addTask={props.addTask}
          column="finished"
        />
      );
    }
  }

  function addButtonEvent() {
    if (props.name === "Backlog") {
      if (isAreaOpen && taskText) {
        setAreaOpen(!isAreaOpen);
        props.addTask(taskText, "backlog");
        setTaskText("");
      } else {
        setAreaOpen(!isAreaOpen);
      }
    } else {
      setAreaOpen(!isAreaOpen);
    }
  }

  return (
    <div className="block">
      <h3>{props.name}</h3>
      <ul className="block-list">
        {props.tasks.length ? (
          props.tasks.map((task, index) => {
            return (
              <li className="block-task" key={index}>
                {task}
              </li>
            );
          })
        ) : (
          <p className="block-task">Нет задач</p>
        )}
      </ul>

      {isAreaOpen && props.name === "Backlog" ? (
        activityBlock()
      ) : isAreaOpen ? (
        <div className="block-arrow">
          <img src={taskArrow} alt="Стрелка" />
          {activityBlock()}
        </div>
      ) : (
        false
      )}

      {isAreaOpen && props.name !== "Backlog" ? (
        false
      ) : (
        <button
          className="button"
          style={{
            backgroundColor: !isAreaOpen || "#0079BF",
            color: !isAreaOpen || "#fff",
          }}
          onClick={() => addButtonEvent()}
        >
          {isAreaOpen || <img src={plus} alt="add cart" />}
          <p style={{ fontSize: "18px" }}>
            {isAreaOpen ? "Submit" : "Add card"}
          </p>
        </button>
      )}
    </div>
  );
}
