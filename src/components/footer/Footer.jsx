import Contact from "../../screens/Contact";

const Footer = () => {
  return (
    <footer className="footer flex flex-col text-white font-normal justify-end lg:bg-cover h-[50vw] md:h-[25vw]">
      <div
        className="flex justify-between px-8 py-4"
        // style={{ letterSpacing: 1 }}
      >
        <div className="flex gap-2 sm:gap-4">
          <a href="https://www.instagram.com/awsugddn/">
            <img
              src="logos/instagram.svg"
              className="w-8 h-8 sm:w-12 sm:h-12 invert"
            />
          </a>
          <a href="https://www.linkedin.com/company/aws-user-group-dehradun/">
            <img
              src="logos/linkedin.svg"
              className="w-8 h-8 sm:w-12 sm:h-12 invert rounded-lg"
            />
          </a>
          <a href="https://x.com/awsugddn/" className="flex my-auto">
            <img
              src="logos/x.svg"
              className="w-7 sm:w-11 aspect-square p-1 sm:p-2 rounded-sm sm:rounded-lg invert bg-black mix-blend-color-dodge"
            />
          </a>
        </div>
        <h4 className="ml-4 text-nowrap flex my-auto font-light">
          Made with ❤️ by
          <a className="text-[#32ccff] font-medium ml-1 cursor-pointer" href="https://www.linkedin.com/in/yoursyash/">@yashdagar</a>
        </h4>
        <div />
      </div>
    </footer>
  );
};

export default Footer;
