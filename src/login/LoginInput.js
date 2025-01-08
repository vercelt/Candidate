import React from "react";
import "./LoginInput.css";

function LoginInput({ labelText, placeholder }) {
  return (
    <div className="email-input-container">
      <label className="email-label">{labelText}</label>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <input type="email" className="email-input" placeholder={placeholder} />
=======
=======
>>>>>>> Stashed changes
      <input
        type={type}
        className="email-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    </div>
  );
}

export default LoginInput;
