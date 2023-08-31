import React, { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.scss";
import BottomNavigator from "../BottomNavigator/BottomNavigator";
import Link from "next/link";
import ExpanseMenu from "@/components/ui/ExpanseMenu/ExpanseMenu";
import { overlayOptions, menuItems } from "@/configurations/menuData";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const menuButtonClasses = `${classes["header-menu-btn"]} ${
    menuIsOpen ? classes["active"] : ""
  }`;

  const toggleMenuButtonHandler = () => {
    setMenuIsOpen((oldState) => !oldState);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const header = document.querySelector(".main-header-g");
      const headerHeight = header.getBoundingClientRect().top;
      const headerScrollOffset = headerHeight + window.scrollY;

      const serviceSection = document.querySelector(".service-section");
      if (!serviceSection) return;

      const serviceSectionTop = serviceSection.offsetTop;
      const serviceSectionBottom =
        serviceSection.offsetTop + serviceSection.offsetHeight - headerHeight;


      if (
        headerScrollOffset >= serviceSectionTop &&
        headerScrollOffset <= serviceSectionBottom
      ) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    };

    // Thêm lắng nghe sự kiện cuộn trang
    window.addEventListener("scroll", handleScroll);

    // Loại bỏ lắng nghe khi component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <ExpanseMenu
        options={overlayOptions}
        isActive={menuIsOpen}
        menu={menuItems}
      />
      <header
        className={`${classes["main-header"]} main-header-g ${
          isDark ? classes["main-header-dark"] : ""
        }`}
      >
        <div className="container--big">
          <div className={classes["header-wrapper"]}>
            <Logo isVisible={!menuIsOpen} isDark={isDark}/>
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
