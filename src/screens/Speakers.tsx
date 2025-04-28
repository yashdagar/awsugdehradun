interface Speaker{
  name: string,
  designation: string,
  img: string,
  linkedin: string
}

const Speakers = () => {
  const speakers: Speaker[] = [
    {
      name: "Johnni Welch",
      designation: "CTO & Founder",
      img: "https://thispersondoesnotexist.com/",
      linkedin: "",
    },
    {
      name: "Florence Jackson",
      designation: "CTO & Founder",
      img: "https://thispersondoesnotexist.com/",
      linkedin: "",
    },
    {
      name: "Brandie Palmer",
      designation: "CTO & Founder",
      img: "https://thispersondoesnotexist.com/",
      linkedin: "",
    },
    {
      name: "Deanna Little",
      designation: "CTO & Founder",
      img: "https://thispersondoesnotexist.com/",
      linkedin: "",
    },
    {
      name: "Jim Grant",
      designation: "CTO & Founder",
      img: "https://thispersondoesnotexist.com/",
      linkedin: "",
    },
    {
      name: "Logan Fernandez",
      designation: "CTO & Founder",
      img: "https://thispersondoesnotexist.com/",
      linkedin: "",
    },
    {
      name: "Jonathan Lucas",
      designation: "CTO & Founder",
      img: "https://thispersondoesnotexist.com/",
      linkedin: "",
    },
    {
      name: "Johni Welch",
      designation: "CTO & Founder",
      img: "https://thispersondoesnotexist.com/",
      linkedin: "",
    },
  ];

  const shouldAnnounce = false;

  return (
    <section className="speakers">
      <div className="aws1" />
      <div className="aws2" />
      <h2 className="mb-0">Speakers</h2>
      {shouldAnnounce ?
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 select-none">
          {speakers.map((speaker) => (
          <div
            className="speaker relative mx-auto flex flex-col"
            key={speaker["name"]}
          >
            <a href={speaker["linkedin"]} target="_blank" className="">
              <div
                className="person-img w-fit mx-auto rounded-full border border-black/10"              >
                <img
                  src={speaker["img"]}
                  loading="lazy"
                  className="transition-all duration-500 aspect-square w-36 md:w-40 xl:w-52 object-cover"
                />
                <img
                  src="logos/linkedin_blue.svg"
                  loading="lazy"
                  className="absolute w-1/3 top-1/3 left-1/3 bg-white transition-all duration-300"
                />
              </div>
            </a>
            <h4 className="text-center text-lg font-semibold capitalize">
              {speaker["name"]}
            </h4>
            <div className="text-center text-gray-500 text-sm font-medium backdrop-blur-sm border border-black/10 rounded-full px-2 w-fit self-center">
              {speaker["designation"]}
            </div>
          </div>
        ))}
        </div>:
        <div className="flex h-full items-center relative">
          {/* <div className="absolute swiggle left-1/3 top-1/3 overflow-hidden w-60 h-30">
            <svg viewBox="0 0 703.5 158"><path fill="#F3D2CF" d="M175.9,20c-14.9,0.1-26,34.2-34.7,61.9c-11.7,37.3-23.9,75.8-52.9,75.9h-0.1c-29,0-41.4-39.4-53.3-76.5 C25.9,53.7,14.9,20.1,0,20V0c29,0.1,41.3,38.2,53.3,75.3c8.9,27.6,20,63,34.9,63c14.9-0.1,25.7-34.6,34.4-62.3 c11.8-37.2,24.2-75.9,53.3-76"></path><path fill="#F3D2CF" d="M351.7,20c-14.9,0.1-26,34.2-34.7,61.9c-11.7,37.3-23.9,75.8-52.9,75.9H264c-29,0-41.4-39.4-53.3-76.5 c-9-27.6-20-61.2-34.9-61.3V0c29,0.1,41.3,38.2,53.3,75.3c8.9,27.6,20,63,34.9,63c14.9-0.1,25.7-34.6,34.4-62.3 c11.8-37.2,24.2-75.9,53.3-76"></path><path fill="#F3D2CF" d="M527.6,20c-14.9,0.1-26,34.2-34.7,61.9c-11.7,37.3-23.9,75.8-52.9,75.9h-0.1c-29,0-41.4-39.4-53.3-76.5 c-9-27.6-20-61.2-34.9-61.3V0c29,0.1,41.3,38.2,53.3,75.3c8.9,27.6,20,63,34.9,63c14.9-0.1,25.7-34.6,34.4-62.3 c11.8-37.2,24.2-75.9,53.3-76"></path><path fill="#F3D2CF" d="M703.5,20c-14.9,0.1-26,34.2-34.7,61.9c-11.7,37.3-23.9,75.8-52.9,75.9h-0.1c-29,0-41.4-39.4-53.3-76.5 c-9-27.6-20-61.2-34.9-61.3V0c29,0.1,41.3,38.2,53.3,75.3c8.9,27.6,20,63,34.9,63c14.9-0.1,25.7-34.6,34.4-62.3 C662,38.8,674.4,0.1,703.5,0"></path></svg>
          </div>
          <div className="absolute animate-spin right-0 top-1/3 -rotate-30 w-60 h-30">
            <svg viewBox="0 0 213 247" height="247" width="213"><g fill="#ff5891" opacity=".9"><path d="M0 17.39c0 1.2.95 2.53 1.81 3.82-.18-1.37-.71-2.56-1.81-3.82zM1.81 21.25l.02.01c-.01-.02-.02-.03-.03-.05 0 .02.01.02.01.04zM213 235.59c-.25-.29-.53-.63-.82-.97.24.35.51.69.82.97z"></path><path d="m46.31 81.27 1.11-.58c2.28 2.86-.45 1.72 1.88 4.18 2.19-.05 3.33 4.53 4.78 4.87-.12.07.85 1.4.37 1.66 1.06-.19 1.23 1.2 2.06 1.87.44.13.05-.39.1-.8l1.74 1.67c.34.93.04 1.45-.66.72 3.6 5.13 21.45 29.28 25.99 34.28.03-1.13-1.64-2.46-1.25-3.78 1.6 1.01 1.45 2.2 2.46 2.4-.89 1.58 2.11 3.32 1.61 5.44l1.06-.19.09 1.05c5.62 5.54 1.48 1.11 5.6 6.7 2.6 3.07 4.81 3.75 5.81 5.81-.2-.27-.29-1.32.55-.66-.55.66 2.18 1.8 1.84 2.73.71.73 2.67 3.4 2.87 1.81-.1.8 1.54 3.26.07 2.18.59.8 1.05 1.66 1.69 2.07l-.54-1.2c2.2 2.54 2.65 4.52 4.81 5.6l-.41-1.26c1.3 1.53 2.4 2.8 2.01 4.12l-1.54-1.41c2.08 2.6 3.38 4.13 5.57 5.94l-.59-.8c3.07 2.08 15.24 16.03 18.36 17.71l-.24-1.72 2.31 1.74c-.19-.27-3.06.7-3.01.31 3.77 4.67 23.62 28.78 26.58 33.5 1 2.06-.84 1.18-.97 1.25 1.94 1.94 1.45.35 2.83 2.21.27.6-.62.33-.94.12.71.73 1.05 1.66 1.42 1.47-.53-1.19.65-1.45.87-2.31l1.77 2.4-.62.32c.4.53 2.51.15 4.03 2.68 2.82 4.06 6.32 8.12 9.26 12.12-.37.2-1.21-.47-2.04-1.14.4.54 1.1 1.27 1.25 1.93-.17-1.4 1.67 1.33 1.33.41 3.56 1.81 5.27 6.46 8.14 8.27 1.35-.72 24.55-10.7 25.96-11.82.59.8 1.18 1.6 1.25 1.93.17-.47-.88-2.13-1.72-2.8l-.86.46c-1.75-1.67.1-.8-1.4-2.59.54-.58 2 1 3.23 2.44-.98-1.4-1.59-3.09-2.69-3.1-.74-1.46.86-.46-.07-2.18-1.03-.94-2.75-1.88-3.36-3.41l.12-.06c-1.74-3.52-4.57-3.88-6.11-7.13l.44.13c-.41-1.26-2.4-2.8-3.4-4.85.27.6.17 1.39-.74.39-1.2-2.33-2.68-3.4-3.36-5.26l-1.72-.94c-5.42-7.13-28.15-34.24-33.81-41.24l.32.2c-8.77-10.53-26.13-32.68-35.72-43.15-.76-2.19-2.77-4.46-4.02-6.38.54 1.19-.15 1.19-.74.39-4.24-5.52-.7-.04-5.31-5.38-5.57-5.93-24.13-30.82-28.07-36.88-3.26-2.35-5.59-6.66-8.49-9.2l.44.13c-2.85-2.94-16.28-21.68-19.51-25.15l.27.6c-3.09-2.81-1.79-3.13-3.5-5.92-.72 1.12-3.46-1.22-4.37-2.22l.25-.13c-1.42-1.47-5.12-4.41-7.33-6.94l.62-.32c-2.31-1.74-5.32-6.07-6.62-7.6-2.62-3.79-6.07-10.11-10.59-14.38L24.2.34 23.69 0S1.23 9.63 2.31 19.13l-.62.33 1.06 1.21c.93 1.73 2.1 1.93 1.48 2.25L2.67 20.8c1.04 1.64-.08.81-.84.47.45.68.87 1.34 1.1 1.98.44.13.05-.4-.02-.72.83.67 2.23 1.41 2.77 2.6 1.17 1.6-.79.79.58 2.65 7.13 9.92 13.82 19.7 21.57 29.3-.05.4-.25.13-.57-.07 2.53 2.73 4.49 5.4 6.82 7.87.34.93.17 1.39.12 1.79.1-.79 12.04 14.3 12.11 14.63v-.03z"></path></g></svg>
          </div> */}
          <h1 className="text-primary uppercase font-bold before:text-black h-32 md:h-96 flex items-center">
            Announcing Soon
          </h1>
        </div>
      }
    </section>
  );
};

export default Speakers;
