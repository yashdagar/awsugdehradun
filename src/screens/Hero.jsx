const Hero = () => {
  return (
    <section className="hero home h-screen w-full flex flex-col items-center justify-center bg-bottom">
      <img
        src="logos/aws.png"
        className="w-4/5 md:w-3/5 lg:w-2/5"
        loading="lazy"
      />
    </section>
  );
};

export default Hero;
