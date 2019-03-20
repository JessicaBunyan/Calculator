import React, { Component } from "react";
import "./App.css";

const CalcButton = props => {
  return (
    <div
      class="button"
      value={props.value}
      onClick={() => props.onClick(props.value)}
    >
      {props.value}
    </div>
  );
};

export default CalcButton;
