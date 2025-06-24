import LinkIcon from "../icons/link";

const Footer = () => {
  return (
    <footer className="footer flex flex-col text-white font-normal justify-start sm:justify-end">
      <div className="h-[50vw] md:h-[30vw] footer-first lg:bg-cover"></div>
      <div className="flex gap-6 px-8 md:px-16 bg-[#41274e]">
        <div className="pt-8 flex flex-row w-full py-4 flex-wrap justify-between gap-4 mt-auto">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-medium mb-2 border-b-secondary border-b-4">Contact Us</h3>
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-medium">Phone Numbers</h4>
              <p className="text-gray-100">+91 96344 83823</p>
              <p className="text-gray-100">+91 99979 69951</p>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <h4 className="text-xl font-medium">Email</h4>
              <a
                href="mailto:awsugdehradun@gmail.com"
                className="hover:text-[#32ccff] transition duration-300 text-base text-gray-100"
              >
                awsugdehradun@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-start sm:justify-end">
            <h3 className="text-3xl font-medium mb-2 sm:ml-auto border-b-secondary border-b-4">Join Us</h3>
            <a
              target="_blank"
              href="https://www.meetup.com/aws-user-group-dehradun/"
              aria-label="See on Meetup"
              className="hover:text-[#32ccff] transition duration-300 justify-start sm:justify-end"
            >
              <div className="flex flex-row items-center link">
                Become a member
                <LinkIcon color="rgb(49, 166, 250)"/>
              </div>
            </a>
            <div className="flex sm:justify-end py-4 bg-[#41274e]">
              <div className="flex gap-2 sm:gap-4">
                <a target="_blank" href="https://www.instagram.com/awsugddn/" aria-label="Visit on Instagram">
                  <img
                    alt="instagram"
                    src="/logos/instagram.svg"
                    className="w-8 sm:w-10 aspect-square invert"
                  />
                </a>
                <a target="_blank" href="https://www.linkedin.com/company/aws-user-group-dehradun/" aria-label="Visit on LinkedIn">
                  <img
                    alt="linkedin"
                    src="/logos/linkedin.svg"
                    className="w-8 sm:w-10 aspect-square invert rounded-lg"
                  />
                </a>
                <a target="_blank" href="https://x.com/awsugddn/" className="flex my-auto" aria-label="Visit on X">
                  <img
                    alt="x"
                    src="/logos/x.svg"
                    className="w-7 sm:w-9 aspect-square p-1 sm:p-2 rounded-sm sm:rounded-lg invert bg-black mix-blend-color-dodge"
                  />
                </a>
              </ div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="lg:mr-8 xl:mr-16 text-nowrap flex my-auto font-light w-full justify-center bg-[#31173e] py-4">
        Made with ❤️ by
        <a
          target="_blank"
          className="text-[#32ccff] font-medium ml-1 cursor-pointer"
          href="https://www.linkedin.com/in/yoursyash/"
          aria-label="Visit Yash on LinkedIn"
        >@yashdagar</a>
      </h4>
    </footer>
  );
};

export default Footer;
