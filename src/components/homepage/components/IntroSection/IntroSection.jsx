import Image from "next/image";
import classes from "./IntroSection.module.scss";

const IntroSection = () => {
  return (
    <section className={classes.intro}>
      <div className="container relative">
        <div className={classes["intro-layout"]}>
          <div className={classes["intro-layout-item"]}>
            <h2 className={classes["intro-greeting"]}>Hello, We Are</h2>
            <div className={classes["intro-brand-img-container"]}>
              <Image
                className={classes["intro-brand-img"]}
                fill
                src="/assets/images/ui/ondigitals.png"
                alt="brand_name"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className={classes["intro-description"]}>
              Thinking inside the box
            </p>
          </div>
          <div className={classes["intro-layout-item"]}>
            <div className={classes["intro-layout-item-img"]}>
              <Image
                src="/assets/images/partials/intro-bg.png"
                fill
                alt="intro-img"
                placeholder="blur"
                blurDataURL={"/assets/images/partials/intro-bg.png"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes["scroll-msg"]} container--big`}>
        <div className={classes["scroll-msg__item"]}>
          <p>SCROLL DOWN</p>
          <div className={classes["scroll-msg__line"]}>
            <p></p>
          </div>
          <p>to discover more</p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
