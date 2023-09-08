import React, { useEffect } from "react";
import classes from "./BlogPage.module.scss";
import { useBoundStore } from "@/store/useBoundStore";
import BlogsHeader from "./components/BlogsHeader/BlogsHeader";
import BlogList from "./components/BlogsListing/BlogList";

const BlogPage = ({ blogsData }) => {
  const setToDark = useBoundStore((state) => state.setToDark);
  const setHeaderCanNotChangeColor = useBoundStore(
    (state) => state.setHeaderCanNotChangeColor
  );

  useEffect(() => {
    setToDark();
    setHeaderCanNotChangeColor();
  }, []);
  return (
    <div className={`container ${classes.container}`}>
      <BlogsHeader />
      <BlogList blogsData={blogsData}/>
    </div>
  );
};

export default BlogPage;
