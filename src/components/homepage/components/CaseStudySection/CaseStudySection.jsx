import Link from "next/link";
import classes from "./CaseStudySection.module.scss";
import CaseStudiesList from "./CaseStudiesList";

const DUMMY_CASE_STUDY = [
  {
    id: 1,
    name: "Client: Renault Vietnam",
    descriptions: [
      "Website Development",
      "SEO Content Creation",
      "Website Development",
    ],
    year: 2020,
    image: "/assets/images/backgrounds/car.png",
  },
  {
    id: 2,
    name: "Client: Renault Vietnam",
    descriptions: [
      "Website Development",
      "SEO Content Creation",
      "Website Development",
    ],
    year: 2020,
    image: "/assets/images/backgrounds/car.png",
  },
  {
    id: 3,
    name: "Client: Renault Vietnam",
    descriptions: [
      "Website Development",
      "SEO Content Creation",
      "Website Development",
    ],
    year: 2020,
    image: "/assets/images/backgrounds/car.png",
  },
];

const CaseStudySection = () => {
  return (
    <section className={classes["case-study"]}>
      <div className="container">
        <div className={classes["case-study-header"]}>
          <h2 className={classes["case-study-header__heading"]}>Case Study</h2>
          <Link href="#">
            <p>VIEW ALL</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 17L17 7"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 7H17V17"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <CaseStudiesList items={DUMMY_CASE_STUDY}/>
      </div>
    </section>
  );
};

export default CaseStudySection;
