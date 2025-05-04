interface Speaker{
  name: string,
  designation: string,
  img: string,
  linkedin: string
}

const Speakers = () => {
  const speakers: Speaker[] = [];

  const shouldAnnounce = speakers.length ;

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
            <a href={speaker["linkedin"]} aria-label={`Visit ${speaker["name"]} on Linkedin`} target="_blank" className="">
              <div
                className="person-img w-fit mx-auto rounded-full border border-black/10">
                <img
                  alt={speaker["name"]}
                  src={speaker["img"]}
                  loading="lazy"
                  className="transition-all duration-500 aspect-square w-36 md:w-40 xl:w-52 object-cover"
                />
                <img
                  alt="linkedin"
                  src="/logos/linkedin_blue.svg"
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

          <h1 className="text-primary text-center uppercase font-bold h-32 md:h-96 flex items-center">
            Announcing <br />
            Soon
          </h1>
        </div>
      }
    </section>
  );
};

export default Speakers;
