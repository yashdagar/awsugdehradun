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
  ];

  return (
    <section className="speakers">
      <h2 className="">SPEAKERS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {speakers.map((speaker) => (
          <div
            className="speaker relative mx-auto flex flex-col"
            key={speaker["name"]}
          >
            <a href={speaker["linkedin"]} target="_blank">
              <div
                className="person-img overflow-clip w-fit mx-auto rounded-full border border-[#0002]"
                loading="lazy"
              >
                <img
                  src={speaker["img"]}
                  className="transition-all duration-500 aspect-square w-36 md:w-40 xl:w-52 object-cover"
                />
                <img
                  src="logos/linkedin.svg"
                  className="absolute w-1/3 h-1/3 top-1/3 left-1/3 invert"
                />
              </div>
            </a>
            <h4 className="text-center text-lg font-semibold capitalize">
              {speaker["name"]}
            </h4>
            <div className="text-center text-gray-900 text-sm font-medium backdrop-blur-sm border border-[#0002] rounded-full px-2 w-fit self-center">
              {speaker["designation"]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
