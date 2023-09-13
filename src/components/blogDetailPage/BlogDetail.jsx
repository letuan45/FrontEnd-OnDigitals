import { useBoundStore } from "@/store/useBoundStore";
import classes from "./BlogDetail.module.scss";
import { useEffect } from "react";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import Link from "next/link";
import ButtonNoBorder from "../ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "../ui/Icons/TopRightArrow";
import ReadMoreSlider from "./components/ReadMoreSlider/ReadMoreSlider";
import PostDetail from "./components/postdetail/PostDetail";

const DUMMY_BREADCRUMB_DATA = [
  {
    id: 1,
    link: "#",
    title: "Home",
  },
  {
    id: 2,
    link: "#",
    title: "News & Insights",
  },
  {
    id: 3,
    link: "#",
    title: "Insights",
  },
  {
    id: 4,
    link: "#",
    title: "Best SEO Strategies: 10 steps to reach your target a",
  },
];

const BlogDetail = ({ relatedPosts, postDetail }) => {
  const headerIsDark = useBoundStore((state) => state.isDark);
  const setToDark = useBoundStore((state) => state.setToDark);
  const setHeaderCanNotChangeColor = useBoundStore(
    (state) => state.setHeaderCanNotChangeColor
  );

  useEffect(() => {
    if (!headerIsDark) {
      setToDark();
    } else {
      setHeaderCanNotChangeColor();
    }
  }, [headerIsDark]);

  return (
    <div className={classes["blog-detail"]}>
      <div className="container">
        <p className={classes["blog-detail-header"]}>Insights</p>
        <div className={classes["blog-detail-breadcrumbs"]}>
          <Breadcrumb data={DUMMY_BREADCRUMB_DATA} />
        </div>
        <section className={classes["blog-detail-content"]}>
          <div className={classes["blog-detail-content__toc"]}></div>
          <div className={classes["blog-detail-content__spacer"]}></div>
          <div className={classes["blog-detail-content__main"]}>
            <PostDetail data={postDetail} />
          </div>
        </section>
        <section className={classes["blog-detail-read-more"]}>
          <div className={classes["blog-detail-read-more__heading"]}>
            <p className={classes["blog-detail-read-more__heading-content"]}>
              Read more
            </p>
            <ButtonNoBorder
              href="#"
              textSize="md"
              RightIcon={
                <TopRightArrow width={24} height={24} color="#131114" />
              }
            >
              VIEW ALL
            </ButtonNoBorder>
          </div>
          <ReadMoreSlider data={relatedPosts} />
        </section>
      </div>
    </div>
  );
};

export default BlogDetail;
