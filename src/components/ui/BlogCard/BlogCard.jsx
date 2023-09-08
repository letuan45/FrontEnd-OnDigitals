import React from "react";
import classes from "./BlogCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Maven_Pro } from "next/font/google";
import { format, parseISO } from "date-fns";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const BlogCard = ({ isForSlider, data }) => {
  const post = data;
  const isoDate = post.date;
  const parsedDate = parseISO(isoDate);
  const formattedDate = format(parsedDate, "dd/MM/yyyy");
  const containerClasses = `${classes["blog-card"]} ${
    isForSlider
      ? `${classes["blog-card-slider"]} card-news-insights-container`
      : ""
  }`;

  return (
    <>
      <Link href={post.link}>
        <div className={containerClasses}>
          <div className={classes["blog-card__image"]}>
            <Image
              src={post.featuredImage.node.sourceUrl}
              fill
              alt={post.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={classes["blog-card__content"]}>
            <div className={classes["blog-card__content__dayView"]}>
              <span
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["blog-card__content--tag"]}
              >
                SEO Tips
              </span>
              {isForSlider && (
                <div className={classes["blog-card__dateview-wrapper"]}>
                  <p
                    style={{ fontFamily: MavenPro.style.fontFamily }}
                  >
                    <i
                      className="fa-regular fa-calendar"
                      style={{ marginRight: "5px" }}
                    ></i>
                    {formattedDate}
                  </p>
                  <p
                    style={{ fontFamily: MavenPro.style.fontFamily }}
                  >
                    <i
                      className="fa-regular fa-eye"
                      style={{ marginRight: "5px" }}
                    ></i>
                    500
                  </p>
                </div>
              )}
            </div>
            <p className={classes["blog-card__content--title-post"]}>
              {post.title}
            </p>
            <div
              style={{ fontFamily: MavenPro.style.fontFamily }}
              className={classes["blog-card__content--text"]}
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            ></div>
            {isForSlider && (
              <div className={classes["blog-card__button"]}>
                <span>
                  Read Full<i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            )}
            {!isForSlider && (
              <div className={classes["blog-card__dateview-wrapper"]}>
                <p
                  style={{ fontFamily: MavenPro.style.fontFamily }}
                  className={classes["blog-card__content__dayView--date"]}
                >
                  <i
                    className="fa-regular fa-calendar"
                    style={{ marginRight: "5px" }}
                  ></i>
                  {formattedDate}
                </p>
                <p
                  style={{ fontFamily: MavenPro.style.fontFamily }}
                  className={classes["blog-card__content__dayView--views"]}
                >
                  <i
                    className="fa-regular fa-eye"
                    style={{ marginRight: "5px" }}
                  ></i>
                  500
                </p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
