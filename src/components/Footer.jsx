import React from "react";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">
        <div className="footer-left">
          <p>Active tasks: </p>
          <p>Finished tasks: </p>
        </div>
        <div className="footer-right">Kanban board by</div>
      </div>
      
    </footer>
  );
}
