import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import classes from "./PartnerSection.module.scss";

export default function PartnerSection() {
  const divImage = `${classes["homepagesectionpartner__content__image"]} ${classes["hvr-bounce-in"]}`;
  return (
    <section className={classes["homepagesectionpartner"]}>
      <div className="container">
        <p className={classes["homepagesectionpartner__title"]}>
          YOUR PARTNER in digital growt
        </p>
        <div className={classes["homepagesectionpartner__content"]}>
          <div className={classes["homepagesectionpartner__content__colleft"]}>
            <div className={classes["homepagesectionpartner__content__item"]}>
              <p className={classes["homepagesectionpartner__content--number"]}>
                500+
              </p>
              <p className={classes["homepagesectionpartner__content--text"]}>
                TRUSTED CLIENTS
              </p>
            </div>
            <div className={classes["homepagesectionpartner__content__item"]}>
              <p className={classes["homepagesectionpartner__content--number"]}>
                300+
              </p>
              <p className={classes["homepagesectionpartner__content--text"]}>
                SUCCESSFUL CAMPAIGNS
              </p>
            </div>
            <div className={classes["homepagesectionpartner__content__item"]}>
              <p className={classes["homepagesectionpartner__content--number"]}>
                1000+
              </p>
              <p className={classes["homepagesectionpartner__content--text"]}>
                TRUSTED CLIENTS
              </p>
            </div>
          </div>
          <div
            className={classes["homepagesectionpartner__content__colrightmain"]}
          >
            <p
              className={
                classes["homepagesectionpartner__content__colright--text"]
              }
            >
              notable clients
            </p>
            <div
              className={
                classes["homepagesectionpartner__content__colrightimage"]
              }
            >
              <div className={divImage}>
                <Image
                  src="/assets/images/sectionHomepage/areus-atelier.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Logo Atelier "
                />
              </div>
              <div className={divImage}>
                <Image
                  src="/assets/images/sectionHomepage/renault.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Logo Renault "
                />
              </div>
              <div className={divImage}>
                <Image
                  src="/assets/images/sectionHomepage/tpcom.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Logo TPcoms"
                />
              </div>
              <div className={divImage}>
                <Image
                  src="/assets/images/sectionHomepage/ducati.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Logo Ducati"
                />
              </div>
              <div className={divImage}>
                <Image
                  src="/assets/images/sectionHomepage/hantec.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Logo Hantec"

                />
              </div>
              <div className={divImage}>
                <Image
                  src="/assets/images/sectionHomepage/livingcare.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Logo LivingCare"
                />
              </div>
              <div className={divImage}>
                <Image
                  src="/assets/images/sectionHomepage/kundal.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Logo LivingCare"
                />
              </div>
              <div className={divImage}>
                <Image
                  src="/assets/images/sectionHomepage/passion-wine.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Logo LivingCare"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes["homepagesectionpartner__below"]}>
          <div className={classes["homepagesectionpartner__below__text"]}>
            We offer advanced digital solutions tailored to your needs.
          </div>
          <a className={classes["homepagesectionpartner__below__button"]}>
            See our process <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
    </section>
  );
}
