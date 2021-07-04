import React from "react";
import { NavLink } from "react-router-dom";

import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      <NavLink exact to="/">
        <img
          src="https://pbs.twimg.com/media/EuRxkYgWQAMytrG.jpg"
          alt="logo audiomeans"
        />
      </NavLink>
    </div>
  );
}

export default Logo;
