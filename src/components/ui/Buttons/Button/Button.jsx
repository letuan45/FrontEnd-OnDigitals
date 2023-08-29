import React from "react";
import classes from "./Button.module.scss";
export default function Button({
  children,
  RightIcon,
  LeftIcon,
  href,
  textSize,
  className,
}) {
  return (
    <button
      type="submit"
      className={`${className != null ? classes[`${className}`] : classes["button"] }`}
    >
      {LeftIcon && LeftIcon}
      <p>{children}</p>
      {RightIcon && RightIcon}
    </button>
  );
}
