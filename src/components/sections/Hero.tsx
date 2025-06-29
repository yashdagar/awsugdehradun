import LinkIcon from "../icons/link";

const Hero = () => {
  return (
    <section className="hero home h-screen w-full flex flex-col items-center justify-between">
      <div className="sm:h-24 md:h-64" />
      <img
        alt="aws"
        src="/logos/aws.webp"
        className="px-4 w-full sm:w-4/5  lg:w-2/5 aws-logo"
      />
      <div className="flex flex-col z-20 w-full mb-8 md:mb-16 px-4 gap-8 md:gap-0">
        <a target="_blank" href="https://konfhub.com/aws-community-day-dehradun-2025" aria-label="Visit Konfhub link" className="hover:cursor-pointer">
        <button className="md:hidden">
          <h3>Join us</h3>
            <LinkIcon color="#fff" />
        </button>
        </a>
        <div className="hidden md:flex justify-around items-stretch gap-8 md:gap-0 min-h-32">
          {/* <div className="flex flex-col content-center backdrop-blur-sm px-8 py-4 sm:px-12 lg:py-12 lg:px-16 sm:py-8 text-whtie bg-[#2224] rounded-3xl border border-white/25 sm:gap-2">
            <h2 className="text-white m-0 after:content-none mx-0 text-nowrap">
              When?
            </h2>
            <h5 className="text-gray-200 text-nowrap">6th September, 2025</h5>
          </div> */}
          <a target="_blank" href="https://konfhub.com/aws-community-day-dehradun-2025" aria-label="Visit Konfhub link" className="hover:cursor-pointer">
          <button className="hidden md:flex bg-primary pl-4 pr-2 py-2 sm:pl-8 sm:pr-6 sm:py-4 h-fit my-auto rounded-full text-white items-center gap-2">
            <h3>Join us</h3>
            <LinkIcon color="#fff" />
          </button>
          </a>
          {/* <a href="https://maps.app.goo.gl/SHecjXUPeVRqD4EV9" aria-label="See on maps" target="_blank">
            <div className="flex flex-col backdrop-blur-sm px-8 py-4 sm:px-12 lg:py-12 lg:px-16 sm:py-8 text-whtie bg-[#2224] rounded-3xl border border-white/25 sm:gap-2">
              <h2 className="text-white m-0 after:content-none"> Where?</h2>
              <h5 className={`text-gray-200 underline`}>
                Hyatt Centric Dehradun
                Dehradun
              </h5>
            </div>
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
