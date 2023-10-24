import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function TaskDescription(props) {
  let { state } = useLocation();
  let allTask = {
    ...props.backlog,
    ...props.ready,
    ...props.inProgress,
    ...props.finished,
  };
  console.log(allTask);

  function handleChange(e) {
    state.task.description = e.target.value;


    // props.setAllTasks(() => {
    //   allTasks.find(task => task.id === state.task.id)
    // })
  }

  return (
    <div className="main">
      <div className="container">
        <div className="description__container">
          <h1 className="description__title">{state.task.text}</h1>
          <textarea
            className="description__text"
            placeholder="This task has no description"
            onChange={handleChange}
          >
            {props.description}
          </textarea>
          <div className="description__btn">
            <Link to="/">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.35355"
                  y1="0.646447"
                  x2="24.3536"
                  y2="23.6464"
                  stroke="black"
                />
                <line
                  y1="-0.5"
                  x2="32.5269"
                  y2="-0.5"
                  transform="matrix(-0.707107 0.707107 0.707107 0.707107 24 1)"
                  stroke="black"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
