import React, { useEffect, useState } from "react";
import classes from "./BlogPage.module.scss";
import { useBoundStore } from "@/store/useBoundStore";
import BlogsHeader from "./components/BlogsHeader/BlogsHeader";
import BlogList from "./components/BlogsListing/BlogList";
import BlogFooter from "./components/BlogsFooter/BlogFooter";

const BlogPage = ({ blogsData }) => {
  const setToDark = useBoundStore((state) => state.setToDark);
  const setHeaderCanNotChangeColor = useBoundStore(
    (state) => state.setHeaderCanNotChangeColor
  );
  const headerIsDark = useBoundStore((state) => state.isDark);

  useEffect(() => {
    if (!headerIsDark) {
      setToDark();
      //setHeaderCanNotChangeColor();
    } else {
      setHeaderCanNotChangeColor();
    }
  }, [headerIsDark]);

  const onChangePageHandler = (pageNum) => {
    console.log(pageNum);
  };

  return (
    <div className={`container ${classes.container}`}>
      <BlogsHeader />
      <BlogList blogsData={blogsData} />
      <BlogFooter onChangePage={onChangePageHandler} />
    </div>
  );
};

export default BlogPage;
