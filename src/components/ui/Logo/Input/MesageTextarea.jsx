import React from "react";
import classes from "./styleForm.module.scss";
export default function MesageTextarea({
  name,
  placeholder,
  onChange,
  onBlur,
  value,
}) {
  return (
    <>
      <div className={classes["contact-form-textarea"]}>
        <label htmlFor={name}>Message</label>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </div>
    </>
  );
}
