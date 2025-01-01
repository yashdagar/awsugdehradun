import { useEffect } from "react";
import { noisyLinesBackground } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

const Hero = () => {
  useEffect(() => {
    noisyLinesBackground({
      el: document.getElementById("hero"),
      colors: [0xdee8ed, 0x31a6fa, 0x252f3e, 0x100033, 0x9d69fb],
      // colors: [0xffffff, 0x0000ff, 0xff00ff, 0x000000],
      minStroke: 1,
      maxStroke: 2,
      timeCoef: 0.0002,
      coordScale: 2,
      displacementScale: 0.02,
    });
  }, []);

  return (
    <section
      id="hero"
      className="hero h-svh w-full flex flex-col items-center justify-center"
    >
      <img src="logos/aws.png" width="600px" loading="lazy" />
    </section>
  );
};

export default Hero;
