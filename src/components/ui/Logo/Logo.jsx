import Image from "next/image";
import classes from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={classes["logo-container"]}>
      <Image
        src="/assets/images/ui/Logo.png"
        fill
        alt="logo"
        placeholder="blur"
        blurDataURL={"/assets/images/ui/Logo.png"}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default Logo;
