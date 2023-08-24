import classes from "./AnimatedLines.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const DUMMY_ANIMATEDLIST = [
  {
    id: 1,
    name: "THOROUGH RESEARCH",
    color: "primary",
  },
  {
    id: 2,
    name: "LOCAL INSIGHTS",
    color: "red-dark",
  },
  {
    id: 3,
    name: "PERSISTENT GROWTH",
    color: "primary-light",
  },
  {
    id: 4,
    name: "FULL TRANSPARENCY",
    color: "red-light",
  },
  {
    id: 5,
    name: "COMPETITIVE PRICING",
    color: "primary",
  },
  {
    id: 6,
    name: "PROJECT MANAGEMEN",
    color: "red-light",
  },
  {
    id: 7,
    name: "THOROUGH RESEARCH",
    color: "primary",
  },
  {
    id: 8,
    name: "LOCAL INSIGHTS",
    color: "red-dark",
  },
  {
    id: 9,
    name: "PERSISTENT GROWTH",
    color: "primary-light",
  },
  {
    id: 10,
    name: "FULL TRANSPARENCY",
    color: "red-light",
  },
  {
    id: 11,
    name: "COMPETITIVE PRICING",
    color: "primary",
  },
  {
    id: 12,
    name: "PROJECT MANAGEMEN",
    color: "red-light",
  },
];

gsap.registerPlugin(ScrollTrigger);

const AnimatedLines = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-30vw",
        ease: "linear",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "bottom bottom",
          toggleActions: "play pause revert revert",
          scrub: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <div className="container overflow-hidden">
      <div className={classes["animated-lines"]} ref={sectionRef}>
        <ul className={classes["animated-lines-list"]} ref={triggerRef}>
          {DUMMY_ANIMATEDLIST.map((item) => {
            const circleClasses = `${classes["animated-lines-item-circle"]} ${
              classes[`${item.color}`]
            }`;
            return (
              <li className={classes["animated-lines-item"]} key={item.id}>
                <div className={circleClasses} />
                <div className={classes["animated-lines-item-content"]}>
                  {item.name}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AnimatedLines;
