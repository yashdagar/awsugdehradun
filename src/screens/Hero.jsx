import { useEffect } from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero user-drag-none h-svh w-full flex flex-col items-center justify-center"
    >
      <img src="logos/aws.png" width="500px" loading="lazy" />
    </section>
  );
};

export default Hero;
