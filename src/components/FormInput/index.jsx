import React from "react";
import "./styles.scss";

export const FormInput = ({ label, ...props }) => {
  return (
    <div className="group">
      <input className="form-input" {...props} />
      {label && (
        <label
          className={`${props.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
