import classes from "./CaseStudySection.module.scss";
import CaseStudiesList from "./CaseStudiesList";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "@/components/ui/Icons/TopRightArrow";

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
          <ButtonNoBorder
            href="#"
            textSize="md"
            RightIcon={<TopRightArrow width={24} height={24} color="#ffffff" />}
          >
            VIEW ALL
          </ButtonNoBorder>
        </div>
      </div>
      <div className="container-no-pd">
        <CaseStudiesList items={DUMMY_CASE_STUDY} />
      </div>
    </section>
  );
};

export default CaseStudySection;
