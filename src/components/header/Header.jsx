import React, { useEffect, useState } from "react";

const Header = () => {
  const [headerScrolled, setHeaderScrolled] = useState(true);

  const [navBarOpen, setNavBarOpen] = useState(false);

  const sections = [
    "Home",
    "About",
    "Speakers",
    "Schedule",
    "Venue",
    "Gallery",
    "Sponsors",
    "Team",
    "FAQ",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        const h = 150 - Math.round((scrollY * 50) / window.innerHeight);
        document
          .getElementsByClassName("hero")[0]
          .style.setProperty(
            "--size",
            `${h * 1.2}${window.innerWidth > window.innerHeight ? "vw" : "vh"}`,
          );
        document
          .getElementsByClassName("hero")[0]
          .style.setProperty("--brightness", `${(h - 70) / 100}`);
        document
          .getElementsByClassName("hero")[0]
          .style.setProperty("--blur", `${Math.min((150 - h) / 5, 8)}px`);
      }

      if (scrollY > 100) {
        const width = Math.floor(
          (scrollY * window.innerWidth) / window.innerHeight,
        );
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSectionClick = (name) => {
    const section = document.getElementsByClassName(name.toLowerCase())[0];
    section.scrollIntoView(true);
  };

  const toggleNavBar = () => setNavBarOpen(!navBarOpen);

  return (
    <header>
      {navBarOpen ? (
        <div
          className="header lg:hidden flex flex-col bg-[#000b] text-white w-screen h-full justify-evenly items-center"
          onClick={() => toggleNavBar()}
        >
          {sections.map((section) => (
            <div
              key={section}
              className="py-4 px-32 w-fit"
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </div>
          ))}
          <button className="px-4 py-3 rounded-full font-normal text-white bg-primary whitespace-nowrap">
            Buy Tickets
          </button>
        </div>
      ) : (
        <div
          className={`lg:hidden flex items-center justify-between px-8 header duration-0 ${
            headerScrolled
              ? "h-20 bg-[#fffa] backdrop-blur-lg text-black"
              : "h-24 bg-transparent text-white"
          }`}
        >
          <img src="logos/logo.png" className="p-4 size-20" loading="lazy" />
          <div
            className={`bg-[url(logos/menu.svg)] size-8 ${headerScrolled ? "" : "inverted"} py-2`}
            onClick={() => toggleNavBar()}
          />
        </div>
      )}
      <div
        className={`lg:flex hidden justify-between w-full header px-16 ${
          headerScrolled
            ? "h-20 bg-[#fffa] backdrop-blur-lg text-black"
            : "h-24 bg-transparent text-white"
        }`}
      >
        <img src="logos/logo.png" className="p-4 w-24 h-24" loading="lazy" />
        <div className="navbar items-center gap-8 flex">
          {sections.map((section) => (
            <div key={section} onClick={() => handleSectionClick(section)}>
              {section}
            </div>
          ))}
          <button className="px-4 py-3 rounded-full font-normal text-white bg-primary whitespace-nowrap">
            Buy Tickets
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
