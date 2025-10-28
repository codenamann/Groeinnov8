import React from "react";
import "./FormInput.css";

const FormInput = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  required = false,
  placeholder = "",
}) => {
  return (
    <div className="form-input-container">
      <label htmlFor={id} className="form-input-label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="form-input"
      />
    </div>
  );
};

export default FormInput;
