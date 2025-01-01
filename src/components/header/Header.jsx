import React, { useEffect, useState } from "react";

const Header = () => {
  const [headerSize, setHeaderSize] = useState("h-24");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setHeaderSize("h-20 bg-[--black]");
      } else {
        setHeaderSize("h-24");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${headerSize} sm:px-8 fixed top-0 left-0 z-50 lg:px-16 w-full flex justify-between items-center`}
    >
      <img src="logos/logo.png" className="p-4 w-24 h-24" loading="lazy" />

      <div className="lg:visible invisible">
        <ul className="ulList flex justify-between items-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Speakers</a>
          </li>
          <li>
            <a href="#">Schedule</a>
          </li>
          <li>
            <a href="#">Venue</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Sponsors</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">
              <button className=" px-4 py-2 rounded-full font-normal">
                Buy Tickets
              </button>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
