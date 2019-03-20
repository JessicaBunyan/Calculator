import React, { Component } from "react";
import "./App.css";

 const CalcButton = (props) => {
    
    return (
      <form>
        <label>
          <input
            type="button"
            value={props.value}
            onClick={() => props.onClick(props.value)}
          />
        </label>
      </form>
    );
  }


 export default CalcButton;