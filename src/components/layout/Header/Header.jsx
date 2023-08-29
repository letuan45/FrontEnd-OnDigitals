import React, { useState } from "react";
import Logo from "@/components/ui/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.scss";
import BottomNavigator from "../BottomNavigator/BottomNavigator";
import Link from "next/link";
import ExpanseMenu from "@/components/ui/ExpanseMenu/ExpanseMenu";


const overlayOptions = [
  {
    id: 1,
    backgroundColor: "#3D1766",
    delay: 0,
  },
  {
    id: 2,
    backgroundColor: "#6F1AB6",
    delay: 0.2,
  },
  {
    id: 3,
    backgroundColor: "#FF0032",
    delay: 0.3,
  },
  {
    id: 4,
    backgroundColor: "#CD0404",
    delay: 0.4,
  },
];

const menuItems = [
  {
    id: 1,
    name: "About us",
  },
  {
    id: 2,
    name: "Services",
  },
  {
    id: 3,
    name: "Case study",
  },
  {
    id: 4,
    name: "Blog",
  },
  {
    id: 5,
    name: "Contact",
  },
];

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuButtonClasses = `${classes["header-menu-btn"]} ${
    menuIsOpen ? classes["active"] : ""
  }`;

  const toggleMenuButtonHandler = () => {
    setMenuIsOpen((oldState) => !oldState);
  };

  // useEffect(() => {
  //   if (menuIsOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [menuIsOpen]);

  return (
    <div>
      <ExpanseMenu
        options={overlayOptions}
        isActive={menuIsOpen}
        menu={menuItems}
      />
      <header className={classes["main-header"]}>
        <div className="container--big">
          <div className={classes["header-wrapper"]}>
            <Logo isVisible={!menuIsOpen} />
            <div className={classes["header-wrapper-fn"]}>
              <Link
                href="#"
                className={`${classes["header-btn"]} ${
                  menuIsOpen ? classes["header-btn--hidden"] : ""
                }`}
              >
                <div className={classes["header-btn__wrapper"]}>
                  <FontAwesomeIcon icon={faLanguage} />
                  <span>English</span>
                </div>
              </Link>
              <Link
                href="#"
                className={`${classes["header-btn"]} ${
                  menuIsOpen ? classes["header-btn--hidden"] : ""
                }`}
              >
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
          <BottomNavigator isVisible={!menuIsOpen} />
        </div>
      </header>
    </div>
  );
};

export default Header;
