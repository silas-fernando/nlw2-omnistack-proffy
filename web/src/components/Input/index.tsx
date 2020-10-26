import React, { InputHTMLAttributes } from "react";
import showOrHideContentInput from "./show-or-hide-content-input.js";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block">
      {label && <label htmlFor={name}>{label}</label>}
      <input id={name} {...rest} />
      {name === "password" && (
        <span
          className="eye"
          onClick={(e) => {
            showOrHideContentInput(name, e.target);
          }}
          /*onMouseUp={() => {
            showOrHideContentInput(name);
          }}
          onMouseDown={() => {
            showOrHideContentInput(name);
          }}
          onTouchStart={() => {
            showOrHideContentInput(name);
          }}
          onTouchEnd={() => {
            showOrHideContentInput(name);
          }}*/
        ></span>
      )}
    </div>
  );
};

export default Input;
