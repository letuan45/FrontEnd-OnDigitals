import React from "react";
import classes from "./BottomNavigator.module.scss";
import Link from "next/link";

const BottomNavigator = ({ isVisible }) => {
  return (
    <div
      className={`${classes["bottom-nav"]} ${
        !isVisible ? classes["bottom-nav--hidden"] : ""
      }`}
    >
      <div className="container--big">
        <Link href="#" className={classes["bottom-nav-item"]}>
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigator;
