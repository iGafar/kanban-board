import React, { useState } from "react";
import logo from "../assets/images/user-avatar.svg";
import arrow from "../assets/images/arrow-down.svg";

export default function Header() {
  const [isRotate, setRotate] = useState(false);

  const arrowRotate = () => {
    if (isRotate) {
      return "scaleY(-1)";
    } else {
      return "none";
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">Awesome Kanban Board</div>
        <div className="user" onClick={() => setRotate(!isRotate)}>
          <img src={logo} alt="avataк" className="user-img" />
          <img
            src={arrow}
            alt="arrow"
            className="user-arrow"
            style={{ transition: "all 200ms linear", transform: arrowRotate() }}
          />

          {isRotate && (
            <div className="profile">
              <p>Profile</p>
              <p>Log Out</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
