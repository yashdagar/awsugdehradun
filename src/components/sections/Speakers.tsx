interface Speaker{
  name: string,
  designation: string,
  company: string,
  companyImage?: string,
  img: string,
  linkedin: string,
}

const Speakers = () => {
  const speakers: Speaker[] = [
    {
      name: "Ridhima Kapoor",
      designation: "Senior Community Manager",
      company: "Amazon Web Services",
      companyImage: "/sponsors/aws.png",
      img: "/speakers/ridhima.webp",
      linkedin: "https://www.linkedin.com/in/kapoor-ridhima/",
    },
    {
      name: "Shubham Londhe",
      designation: "Developer Advocate",
      company: "Amazon Web Services",
      companyImage: "/sponsors/aws.png",
      img: "/speakers/shubham.webp",
      linkedin: "https://www.linkedin.com/in/shubhamlondhe1996/",
    },
    {
      name: "Purnesh Tripathi",
      designation: "Senior Account Manager",
      company: "Amazon Web Services",
      companyImage: "/sponsors/aws.png",
      img: "/speakers/purnesh.webp",
      linkedin: "https://www.linkedin.com/in/purneshtripathi/",
    },
    {
      name: "Shikha Nautiyal",
      designation: "Senior Account Manager",
      company: "Amazon Web Services",
      companyImage: "/sponsors/aws.png",
      img: "/speakers/shikha.webp",
      linkedin: "https://www.linkedin.com/in/shikhanautiyal/",
    },
    {
      name: "Ameya Vaidya",
      designation: "Principle Architect",
      company: "DreamWorld Tech",
      companyImage: "/speakers/dream_world_tech.png",
      img: "/speakers/ameya.webp",
      linkedin: "https://www.linkedin.com/in/ameya-vaidya-9a164317/",
    },
    {
      name: "Kushal Nagrani",
      designation: "Data Solutions Achitect",
      company: "EPAM Systems",
      companyImage: "/speakers/epam.png",
      img: "/speakers/kushal.webp",
      linkedin: "https://in.linkedin.com/in/kushal-nagrani/",
    },
    {
      name: "Himank",
      designation: "Devops Engineer",
      company: "Ciena",
      companyImage: "/speakers/ciena.jpeg",
      img: "/speakers/himank.webp",
      linkedin: "https://www.linkedin.com/in/varhimank/",
    },
    {
      name: "Deepankar Anand",
      designation: "Senior Manager - Data Science & Analytics",
      company: "Tredence Analytics",
      companyImage: "/speakers/tredence.jpeg",
      img: "/speakers/deepankar.jpeg",
      linkedin: "https://www.linkedin.com/in/deepankaranand/",
    },
  ];

  const shouldAnnounce = speakers.length ;

  return (
    <section className="speakers">
      <div className="aws1" />
      <div className="aws2" />
      <h2 className="mb-24">Speakers</h2>
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
            <p className="flex mx-auto mb-2">{speaker["companyImage"] && (<img src={speaker["companyImage"]} className="h-4 mr-2 rounded-sm" />)}{speaker["company"]}</p>
            <div className="text-center text-gray-500 bg-white text-sm font-medium backdrop-blur-sm border border-black/10 rounded-full px-3 w-fit self-center">
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
