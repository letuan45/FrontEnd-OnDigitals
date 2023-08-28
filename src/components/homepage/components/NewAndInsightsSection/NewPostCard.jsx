import React from "react";
import classes from "./NewAndInsightsSection.module.scss";
import Image from "next/image";
export default function NewPostCard(data) {
  const post = data.data;
  return (
    <>
      <div className={`${classes["card-news-insights"]} card-news-insights-container`}>
        <div className={classes["card-news-insights__image"]}>
          <Image
            src={post.featuredImage.node.sourceUrl}
            fill
            alt={post.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={classes["card-news-insights__content"]}>
          <div className={classes["card-news-insights__content__dayView"]}>
            <span className={classes["card-news-insights__content--tag"]}>
              SEO Tips
            </span>
            <p
              className={classes["card-news-insights__content__dayView--date"]}
            >
              <i className="fa-regular fa-calendar" style={{ marginRight: "5px" }}></i>
             1/1/2012
            </p>
            <p
              className={classes["card-news-insights__content__dayView--views"]}
            >
              <i
                className="fa-regular fa-eye"
                style={{ marginRight: "5px" }}
              ></i>
              500
            </p>
          </div>

          <p className={classes["card-news-insights__content--titlePost"]}>
            {post.title}
          </p>
          <div
            className={classes["card-news-insights__content--text"]}
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          ></div>

          <div className={classes["card-news-insights__button"]}>
            <a href={post.link}>
              Read Full<i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
