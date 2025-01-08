import React, { useEffect } from "react";
import "./Toast.css";

const Toast = ({ errorStyle, message, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <div
      className={`toast ${visible ? "show" : ""} ${
        errorStyle ? "error" : "loading"
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;
