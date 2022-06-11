import React from "react";
import "./app-logo.css";

const icon = require("./images/.png");

export const AppLogo = () => {
  return <img className="app-icon--img" src={icon} alt="task Logo" />
};
