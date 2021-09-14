import React from "react";

const FormItem = ({ htmlFor, labelName, id, name, type }) => {
  return (
    <>
      <div className="form-item">
        <label htmlFor={htmlFor} className="contact-me-form-text">
          {labelName}
        </label>

        <input
          required
          id={id}
          name={name}
          className="contact-me-form-input"
          type={type}
        />
      </div>
    </>
  );
};

export default FormItem;
