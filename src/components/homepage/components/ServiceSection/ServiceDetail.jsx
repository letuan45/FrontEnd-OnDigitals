import Link from "next/link";
import classes from "./ServiceDetail.module.scss";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ServiceDetail = ({ context }) => {
  const contentRef = useRef(null);
  const colorClass = classes[`${context.activeColor}`];

  useEffect(() => {
    const serviceDetailElement = contentRef.current;
    serviceDetailElement.classList.remove(classes["fade-in"]);
    const fadeIn = setTimeout(() => {
      serviceDetailElement.classList.add(classes["fade-in"]);
    }, 400);

    () => {
      clearTimeout(fadeIn);
    };
  }, [context.content]);

  return (
    <div className={`${classes["service-details"]} ${colorClass}`}>
      <div className={classes["service-details-header"]}></div>
      <div className={classes["service-details-content"]} ref={contentRef}>
        <div className={classes["service-details-content-wrapper"]}>
          <h3 className={classes["service-details-content__title"]}>
            {context.title}
          </h3>
          <div className={classes["service-details-content__main"]}>
            {context.content}
          </div>
          <Link
            href="#"
            className={classes["service-details-content__explore"]}
          >
            Explore
          </Link>
        </div>
        <div className={classes["service-details-image"]}>
          <Image
            src={context.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            blurDataURL={context.image}
            placeholder="blur"
            fill
            alt="service-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
