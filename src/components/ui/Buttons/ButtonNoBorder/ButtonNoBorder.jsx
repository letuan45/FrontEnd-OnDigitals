import Link from "next/link";
import classes from "./ButtonNoBorder.module.scss";

const ButtonNoBorder = ({ children, RightIcon, LeftIcon, href, textSize }) => {
  return (
    <Link className={`${classes.btn} ${classes[`${textSize}`]}`} href={href}>
      {LeftIcon && LeftIcon}
      <p>{children}</p>
      {RightIcon && RightIcon}
    </Link>
  );
};

export default ButtonNoBorder;
