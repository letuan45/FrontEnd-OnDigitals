import React, { useState } from "react";
import classes from "./ButtonSearch.module.scss";
import { CancelIcon, SearchIcon } from "../../Icons/ListIcon";
import SearchInput from "../../Input/SearchInput";

export default function ButtonSearch() {
  const [isSearchIcon, setIsSearchIcon] = useState(true);

  const handleClick = () => {
    setIsSearchIcon((prev) => !prev);
  };

  return (
    <>
      <div className={classes["button-search"]}>
        <div className={classes["icon-show"]} onClick={handleClick}>
          {isSearchIcon ? (
            <SearchIcon width={24} height={24} color={"rgba(19, 17, 20, 1)"} />
          ) : (
            <CancelIcon width={24} height={24} color={"rgba(19, 17, 20, 1)"} />
          )}
        </div>
        <div className={classes["input-search"]}>
          {!isSearchIcon && <SearchInput />}
        </div>
      </div>
    </>
  );
}
