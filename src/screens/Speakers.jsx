const Speakers = () => {
  const speakers = [
    {
      name: "Johnni Welch",
      designation: "CTO & Founder",
      img: "https://thispersondoesnotexist.com/",
    },
    {
      name: "Florence Jackson",
      designation: "CTO & Founder",
      img: "https://thispersondoesnotexist.com/",
    },
    {
      name: "Brandie Palmer",
      designation: "CTO & Founder",
      img: "https://thispersondoesnotexist.com/",
    },
    {
      name: "Deanna Little",
      designation: "CTO & Founder",
      img: "https://thispersondoesnotexist.com/",
    },
    {
      name: "Jim Grant",
      designation: "CTO & Founder",
      img: "https://thispersondoesnotexist.com/",
    },
    {
      name: "Logan Fernandez",
      designation: "CTO & Founder",
      img: "https://thispersondoesnotexist.com/",
    },
    {
      name: "Jonathan Lucas",
      designation: "CTO & Founder",
      img: "https://thispersondoesnotexist.com/",
    },
    {
      name: "Johni Welch",
      designation: "CTO & Founder",
      img: "https://thispersondoesnotexist.com/",
    },
  ];

  return (
    <section className="speakers">
      <div className="aws1" />
      <div className="aws2" />
      <h2 className="">Speakers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 select-none">
        {speakers.map((speaker) => (
          <div
            className="speaker relative mx-auto flex flex-col"
            key={speaker["name"]}
          >
            <a href={speaker["linkedin"]} target="_blank" className="">
              <div
                className="person-img w-fit mx-auto rounded-full border border-[#0002]"
                loading="lazy"
              >
                <img
                  src={speaker["img"]}
                  className="transition-all duration-500 aspect-square w-36 md:w-40 xl:w-52 object-cover"
                />
                <img
                  src="logos/linkedin_blue.svg"
                  className="absolute w-1/3 top-1/3 left-1/3 bg-white transition-all duration-300"
                />
              </div>
            </a>
            <h4 className="text-center text-lg font-semibold capitalize">
              {speaker["name"]}
            </h4>
            <div className="text-center text-gray-500 text-sm font-medium backdrop-blur-sm border border-[#0002] rounded-full px-2 w-fit self-center">
              {speaker["designation"]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
