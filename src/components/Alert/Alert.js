import React from "react";
import "./Alert.css";

function Alert(props) {
  return (
    <div className="alert-container">
      <h3>{props.msg}</h3>
    </div>
  );
}

export default Alert;
