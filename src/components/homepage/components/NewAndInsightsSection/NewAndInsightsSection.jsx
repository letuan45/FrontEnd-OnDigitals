import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  FreeMode,
} from "swiper/modules";
import Image from "next/image";
import classes from "./NewAndInsightsSection.module.scss";
import NewPostCard from "./NewPostCard";

export default function NewAndInsightsSection({ data }) {
  const listPosts = data.allPosts;
  return (
    <>
      <section className={classes["section-new-insights"]}>
        <div className="container">
          <div className={classes["section-new-insights__title"]}>
            <p className={classes["section-new-insights__title--left"]}>
              News & Insights
            </p>
            <p className={classes["section-new-insights__title--right"]}>
              Get update with latest Digital news and insights
            </p>
          </div>
          <div className={classes["section-new-insights__content"]}>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              freeMode={true}
              keyboard={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
              }}
              modules={[
                Navigation,
                Pagination,
                Mousewheel,
                Keyboard,
                Autoplay,
                FreeMode,
              ]}
              className="news-insights-swiper"
            >
              {listPosts.map((post) => (
                <SwiperSlide key={post.id}>
                  <NewPostCard data={post} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={classes["button-discover-more"]}>
              <a>
                Discover more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="#131114"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7H17V17"
                    stroke="#131114"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
