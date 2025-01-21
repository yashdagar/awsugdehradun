import Contact from "../../screens/Contact";

const Footer = () => {
  return (
    <div className="footer contact flex flex-col">
      <Contact />
      <div className="h-[-webkit-fill-available]" />
      <footer
        className="text-white font-normal flex justify-between px-8 py-4"
        // style={{ letterSpacing: 1 }}
      >
        <div className="flex gap-2 sm:gap-4 w-1/2">
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
              className="w-8 sm:w-11 aspect-square p-2 rounded-lg invert bg-black mix-blend-color-dodge"
            />
          </a>
        </div>
        <h4 className="ml-4 text-nowrap flex my-auto font-light">
          Made with ❤️ by
          <a className="text-[#32ccff] font-medium ml-1">@yashdagar</a>
        </h4>
      </footer>
    </div>
  );
};

export default Footer;
