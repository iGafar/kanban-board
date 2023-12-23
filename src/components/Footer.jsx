import React from "react";

export default function Footer({ activeTasks, finishedTasks }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          <p>Active tasks: {activeTasks}</p>
          <p>Finished tasks: {finishedTasks}</p>
        </div>
        <div className="footer-right">Kanban board by Gafar, 2023</div>
      </div>
    </footer>
  );
}
