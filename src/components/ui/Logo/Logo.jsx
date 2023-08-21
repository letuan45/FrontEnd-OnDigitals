import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/assets/images/ui/Logo.png"
        width={78.64}
        height={79.03}
        alt="logo"
        priority={true}
      />
    </div>
  );
};

export default Logo;
