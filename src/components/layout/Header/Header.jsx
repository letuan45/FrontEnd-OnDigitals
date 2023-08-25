import React, { useState } from "react";
import Logo from "@/components/ui/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.scss";
import BottomNavigator from "../BottomNavigator/BottomNavigator";
import Link from "next/link";

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const menuButtonClasses = `${classes["header-menu-btn"]} ${
    mobileMenuIsOpen ? classes["active"] : ""
  }`;

  const toggleMenuButtonHandler = () => {
    setMobileMenuIsOpen((oldState) => !oldState);
  };

  return (
    <header className={classes["main-header"]}>
      <div className="container--big">
        <div className={classes["header-wrapper"]}>
          <Logo />
          <div className={classes["header-wrapper-fn"]}>
            <Link href="#" className={classes["header-btn"]}>
              <div className={classes["header-btn__wrapper"]}>
                <FontAwesomeIcon icon={faLanguage} />
                <span>English</span>
              </div>
            </Link>
            <Link href="#" className={classes["header-btn"]}>
              <div className={classes["header-btn__wrapper"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 2L11 13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2L15 22L11 13L2 9L22 2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Request Credential</span>
              </div>
            </Link>
            <button
              className={menuButtonClasses}
              onClick={toggleMenuButtonHandler}
            >
              <div className={classes.line}></div>
              <div className={classes.line}></div>
              <div className={classes.line}></div>
            </button>
          </div>
        </div>
        <BottomNavigator />
      </div>
    </header>
  );
};

export default Header;
