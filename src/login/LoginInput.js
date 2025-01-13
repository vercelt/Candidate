import React from "react";
import "./LoginInput.css";

function LoginInput({ labelText, placeholder, type, value, onChange }) {
  return (
    <div className="email-input-container">
      <label className="email-label">{labelText}</label>
      <input
        type={type}
        className="email-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default LoginInput;
