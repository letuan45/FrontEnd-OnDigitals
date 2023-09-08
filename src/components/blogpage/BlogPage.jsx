import React, { useEffect, useState } from "react";
import classes from "./BlogPage.module.scss";
import { useBoundStore } from "@/store/useBoundStore";
import BlogsHeader from "./components/BlogsHeader/BlogsHeader";
import BlogList from "./components/BlogsListing/BlogList";
import { SearchPostsByKey } from "@/pages/api/graphql";

const BlogPage = ({ blogsData }) => {
  const setToDark = useBoundStore((state) => state.setToDark);
  const setHeaderCanNotChangeColor = useBoundStore(
    (state) => state.setHeaderCanNotChangeColor
  );
  const [renderData, setRenderData] = useState(blogsData);

  useEffect(() => {
    setToDark();
    setHeaderCanNotChangeColor();
  }, []);

  const  searchBlogHandler = async (searchValue) => {
    const searchedPosts = await SearchPostsByKey({ key: searchValue.text });
    setRenderData(searchedPosts) 
  }
  return (
    <div className={`container ${classes.container}`}>
      <BlogsHeader onSearch={searchBlogHandler}/>
      <BlogList blogsData={renderData}/>
    </div>
  );
};

export default BlogPage;
