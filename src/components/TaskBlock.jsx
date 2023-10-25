import React, { useState } from "react";
import { Link } from "react-router-dom";
import plus from "../assets/images/add-card.svg";
import taskArrow from "../assets/images/taskArrow.svg";
import TaskArea from "./TaskArea";
import TaskSelect from "./TaskSelect";

export default function TaskBlock(props) {
  const [isAreaOpen, setAreaOpen] = useState(false);
  const [task, setTask] = useState({ id: 0, text: "", description: "" });

  function activityBlock() {
    if (props.name === "Backlog") {
      return (
        <TaskArea
          task={task}
          setTask={setTask}
          tasksLength={props.tasksLength}
        />
      );
    } else if (props.name === "Ready") {
      if (props.length === 0) {
        return setAreaOpen(!isAreaOpen);
      }
      return (
        <TaskSelect
          tasks={props.select}
          addTask={props.addTask}
          column="ready"
        />
      );
    } else if (props.name === "In Progress") {
      if (props.length === 0) {
        return setAreaOpen(!isAreaOpen);
      }
      return (
        <TaskSelect
          tasks={props.select}
          addTask={props.addTask}
          column="in_progress"
        />
      );
    } else if (props.name === "Finished") {
      if (props.length === 0) {
        return setAreaOpen(!isAreaOpen);
      }
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
      if (isAreaOpen && task.text) {
        setAreaOpen(!isAreaOpen);
        props.addTask(
          { id: props.tasksLength, ...task, description: "" },
          "backlog"
        );
        setTask({ id: 0, text: "", description: "" });
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
                <Link
                  to={`tasks/${task.id}`}
                  state={{ task, column: props.name }}
                >
                  {task.text}
                </Link>
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
          <span onClick={() => setAreaOpen(!isAreaOpen)}>
            <img src={taskArrow} alt="Стрелка" />
          </span>

          {activityBlock()}
        </div>
      ) : (
        false
      )}

      <button
        className="button"
        disabled={
          props.name !== "Backlog" && !props.select.length ? true : false
        }
        style={{
          backgroundColor: !isAreaOpen || "#0079BF",
          color: !isAreaOpen || "#fff",
        }}
        onClick={() => addButtonEvent()}
      >
        {isAreaOpen || <img src={plus} alt="add cart" />}
        <p style={{ fontSize: "18px" }}>{isAreaOpen ? "Submit" : "Add card"}</p>
      </button>
    </div>
  );
}
