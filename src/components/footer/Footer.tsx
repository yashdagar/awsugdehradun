import LinkIcon from "../icons/link";

const Footer = () => {
  return (
    <footer className="footer flex flex-col text-white font-normal justify-end">
      <div className="h-[50vw] md:h-[30vw] footer-first lg:bg-cover"></div>
      <div className="flex gap-6">
        <div className="pt-8 bg-[#41274e] flex flex-row w-full px-8 md:px-16 py-4 flex-wrap justify-between gap-4 mt-auto">
          <div className="flex flex-col gap-2">
            <h3>Contact Us</h3>
            <p>+91 96344 83823</p>
            <p>+91 99979 69951</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>Join Us</h3>
            <a
              href="https://www.meetup.com/aws-user-group-dehradun/"
              aria-label="See on Meetup"
              className="hover:text-[#32ccff] transition duration-300"
            >
              <div className="flex flex-row items-center link">
              Become a member
              <LinkIcon color="rgb(49, 166, 250)"/>
            </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-8 py-4 bg-[#41274e]">
        <div className="flex gap-2 sm:gap-4">
          <a href="https://www.instagram.com/awsugddn/" aria-label="Visit on Instagram">
            <img
            alt="instagram"
              src="/logos/instagram.svg"
              className="w-8 h-8 sm:w-12 sm:h-12 invert"
            />
          </a>
          <a href="https://www.linkedin.com/company/aws-user-group-dehradun/" aria-label="Visit on Instagram">
            <img
            alt="linkedin"
              src="/logos/linkedin.svg"
              className="w-8 h-8 sm:w-12 sm:h-12 invert rounded-lg"
            />
          </a>
          <a href="https://x.com/awsugddn/" className="flex my-auto" aria-label="Visit on X">
            <img
            alt="x"
              src="/logos/x.svg"
              className="w-7 sm:w-11 aspect-square p-1 sm:p-2 rounded-sm sm:rounded-lg invert bg-black mix-blend-color-dodge"
            />
          </a>
        </div>
        <h4 className="ml-4 text-nowrap flex my-auto font-light">
          Made with ❤️ by
          <a
            className="text-[#32ccff] font-medium ml-1 cursor-pointer"
            href="https://www.linkedin.com/in/yoursyash/"
             aria-label="Visit Yash on Linkedin"
          >@yashdagar</a>
        </h4>
        <div />
      </div>
    </footer>
  );
};

export default Footer;
