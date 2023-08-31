import React from "react";
import IntroSection from "./components/IntroSection/IntroSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import CaseStudySection from "./components/CaseStudySection/CaseStudySection";
import PartnerSection from "./components/PartnerSection/PartnerSection";
import NewAndInsightsSection from "./components/NewAndInsightsSection/NewAndInsightsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/mousewheel";
import { useEffect, useRef, useState } from "react";

const HomePage = (allPosts) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const handleSlideChange = (swiper) => {};

  //Xác định scroll lên, đạt đến 100vh của slider thì enable
  useEffect(() => {
    const handleScrollWheel = (event) => {
      const wheelDirection = event.deltaY > 0 ? "down" : "up";
      const swiperElement = swiperRef.current;
      const swiperObj = swiperElement.swiper;
      const elementTop = swiperElement.getBoundingClientRect().top;

      if (swiperObj.activeIndex !== 4) {
        window.scrollTo({ top: 0, behavior: "instant" });
        return;
      }

      if (
        elementTop === 0 &&
        swiperObj.isEnd &&
        swiperObj.activeIndex === 4 &&
        wheelDirection === "down"
      ) {
        swiperObj.enabled = false;
        return;
      }

      //Kiểm tra xem phần tử có trong tầm nhìn của viewport không
      if (elementTop === 0 && swiperObj.isEnd && wheelDirection === "up") {
        swiperObj.enabled = true;
        return;
      }
    };

    window.addEventListener("wheel", handleScrollWheel);

    // Dọn dẹp sự kiện khi component bị hủy
    return () => {
      window.removeEventListener("wheel", handleScrollWheel);
    };
  }, []);

  return (
    <>
      <Swiper
        ref={swiperRef}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        modules={[EffectFade, Mousewheel]}
        direction={"vertical"}
        effect="fade"
        allowTouchMove={false}
        className="sectionSwiper"
        mousewheel={true}
        speed={1500}
      >
        <SwiperSlide>
          <IntroSection />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceSection />
        </SwiperSlide>
        <SwiperSlide>
          <PartnerSection />
        </SwiperSlide>
        <SwiperSlide>
          <CaseStudySection />
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <NewAndInsightsSection data={allPosts} />
          </div>
        </SwiperSlide>
      </Swiper>
      <ContactSection />
    </>
  );
};
export default HomePage;
