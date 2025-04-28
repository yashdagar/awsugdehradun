import React, { useEffect, useState } from "react";

// WHEN, WHERE -> ANNOUNCING SOON ✅
// JOIN US -> KONFHUB ✅
// EVENT SCHEDULE -> COMMENT ✅
// VENUE -> DEHRADUN ✅
// SPONSORS -> EDIT TO CENTER BUTTON ✅
//        -> DOWNLOAD BROCHURE
// ABOUT ###AHHHH###
// GALLERY -> MARQUEE
// PROPER? FOOTER ✅
//    CONTACT US -> PHONE NUMBERS -> UNNATI, ADITYA ✅
//        -> JOIN US -> MEETUP LINK ✅
const Header = () => {
  const [headerScrolled, setHeaderScrolled] = useState(false);

  const [navBarOpen, setNavBarOpen] = useState(false);

  const sections = [
    "Home",
    // "About",
    "Speakers",
    "Schedule",
    "Gallery",
    "Venue",
    "Sponsors",
    "Team",
    "FAQ",
    // "Contact",
  ];

  useEffect(() => {
    setHeaderScrolled(window.scrollY > 100);
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        const h = 150 - Math.round((scrollY * 50) / window.innerHeight);
        const hero = document.getElementsByClassName('hero')[0] as HTMLElement;
        hero.style.setProperty("--size", `${h * 1.1 * 1.2}vh ${h * 1.1}vh`);
        hero.style.setProperty("--brightness", `${(h - 70) / 100}`);
        hero.style.setProperty("--blur", `${Math.min((150 - h) / 5, 8)}px`);
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

  const handleSectionClick = (name: string) => {
    const section = document.getElementsByClassName(name.toLowerCase())[0];
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const toggleNavBar = () => setNavBarOpen(!navBarOpen);

  return (
    <header>
      {navBarOpen ? (
        <div
          className="backdrop-blur header lg:hidden flex flex-col bg-black/90 text-white w-screen h-full justify-evenly py-8"
          onClick={() => toggleNavBar()}
        >
          {sections.map((section) => (
            <div
              key={section}
              className="py-4 mx-8 w-full px-8"
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </div>
          ))}
          <button className="mx-14 px-4 py-2 w-fit rounded-full font-normal text-white bg-primary whitespace-nowrap">
            Buy Tickets
          </button>
        </div>
      ) : (
        <div
          className={`lg:hidden flex items-center justify-between px-8 header duration-0 ${
            headerScrolled
              ? "h-20 bg-white/80 backdrop-blur-lg text-black"
              : "h-24 bg-transparent text-white"
          }`}
        >
          <img
            src="logos/logo.png"
            className={`p-4 ${headerScrolled ? "size-20" : "size-24"}`}
            loading="lazy"
          />
          <div
            className={`bg-[url(/logos/menu.svg)] size-8 ${headerScrolled ? "" : "inverted"} py-2`}
            onClick={() => toggleNavBar()}
          />
        </div>
      )}
      <div
        className={`lg:flex hidden justify-between w-full header px-16 ${
          headerScrolled
            ? "h-20 bg-white/80 backdrop-blur-lg text-black"
            : "h-24 bg-transparent text-white"
        }`}
      >
        <img
          src="/logos/logo.png"
          className={`transition-all ${headerScrolled ? "size-22 p-2" : "size-24 p-4"}`}
          loading="lazy"
        />
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
