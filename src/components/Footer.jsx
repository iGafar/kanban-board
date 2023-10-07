import React from "react";

export default function Footer(props) {


  return (
    <footer className="footer">

      <div className="container">
        <div className="footer-left">
          <p>Active tasks: {props.activeTasks}</p>
          <p>Finished tasks: {props.finishedTasks}</p>
        </div>
        <div className="footer-right">Kanban board by Gafar, 2023</div>
      </div>
      
    </footer>
  );
}
