import Image from "next/image";
import classes from "./IntroSection.module.scss";

const IntroSection = () => {
  return (
    <section className={classes.intro}>
      <div className="container">
        <div className={classes["intro-layout"]}>
          <div className={classes["intro-layout-item"]}>
            <h2 className={classes["intro-greeting"]}>Hello, We Are</h2>
            <Image
              className={classes["intro-brand-img"]}
              width={623}
              height={72}
              src="/assets/images/ui/ondigitals.png"
              alt="brand_name"
            />
            <p className={classes["intro-description"]}>
              Thinking inside the box
            </p>
          </div>
          <div className={classes["intro-layout-item"]}>
            <Image
              src="/assets/images/partitals/intro-bg.png"
              width={588}
              height={561}
              alt="intro-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
