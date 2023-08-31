import { useState } from "react";
import ExpanseMenu from "../ExpanseMenu/ExpanseMenu";
import { overlayOptions, menuItems } from "@/configurations/menuData";
import classes from "./SectionHeader.module.scss";
import Logo from "../Logo/Logo";

const SectionHeader = ({ isDark }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuButtonClasses = `${classes["header-menu-btn"]} ${
    menuIsOpen ? classes["active"] : ""
  }`;

  const toggleMenuButtonHandler = () => {
    setMenuIsOpen((oldState) => !oldState);
  };

  return (
    <>
      <ExpanseMenu
        options={overlayOptions}
        isActive={menuIsOpen}
        menu={menuItems}
      />
      <header className={classes["main-header"]}>
        <div className="container--big">
          <div className={classes["header-wrapper"]}>
            <Logo isVisible={!menuIsOpen} isDark={isDark} />
            <div
              className={`${classes["header-wrapper-fn"]} ${
                isDark && !menuIsOpen ? classes.dark : ""
              }`}
            >
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
        </div>
      </header>
    </>
  );
};

export default SectionHeader;
