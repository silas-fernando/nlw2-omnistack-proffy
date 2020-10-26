import React, { InputHTMLAttributes } from "react";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <label className="custom-checkbox">
      <input type="checkbox" {...rest} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};

export default Input;
