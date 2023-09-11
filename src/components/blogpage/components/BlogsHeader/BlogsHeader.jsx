import SelectOption from "@/components/ui/SelectOption/SelectOption";
import classes from "./BlogsHeader.module.scss";

const DUMMY_CATEGORIES = [
  {
    id: 1,
    name: "ALL",
  },
  {
    id: 2,
    name: "SEO",
  },
  {
    id: 3,
    name: "PPC",
  },
  {
    id: 4,
    name: "Content Marketing",
  },
  {
    id: 5,
    name: "Social Media",
  },
  {
    id: 6,
    name: "Website / App Development",
  },
  {
    id: 7,
    name: "Creative Design",
  },
];

const DUMMY_SORT_BY = [
  {
    id: 1,
    name: "Newest",
  },
  {
    id: 2,
    name: "Oldest",
  },
  {
    id: 3,
    name: "Most popular",
  },
];

const BlogsHeader = () => {
  return (
    <div className={classes["blog-header"]}>
      <div className={classes["blog-header-left-item"]}>
        <p className={classes["blog-header-left-item__heading"]}>
          News & Insights
        </p>
        <p className={classes["blog-header-left-item__desc"]}>
          Get update with latest Digital news, trends and insights
        </p>
      </div>
      <div className={classes["blog-header-right-item"]}>
        <div className={classes["blog-header-right-item__option"]}>
          <SelectOption options={DUMMY_CATEGORIES} label="category" />
        </div>
        <div
          className={classes["blog-header-right-item__option"]}
        >
          <SelectOption options={DUMMY_SORT_BY} label="sort by" />
        </div>
      </div>
    </div>
  );
};

export default BlogsHeader;
