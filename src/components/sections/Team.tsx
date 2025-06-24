interface Member{
  name: string,
  designation: string,
  img: string,
  linkedin: string
}

const Team = () => {
  const memberGroups: Member[][] = [
    [
      {
        name: "Aditya Pandey",
        designation: "Organizer",
        img: "members/aditya.webp",
        linkedin: "https://www.linkedin.com/in/adityapandey23/",
      },
      {
        name: "Yakshu Makkar",
        designation: "Co-organizer",
        img: "members/yakshu.webp",
        linkedin: "https://www.linkedin.com/in/yakshu-makkar-ym39/",
      },
    ],
    [
      {
        name: "Vaishnavi Srivastava",
        designation: "Team Lead",
        img: "members/vaishnavi.webp",
        linkedin: "https://www.linkedin.com/in/vaishnavi7279/",
      },
      {
        name: "Pranav Aeron",
        designation: "Team Lead",
        img: "members/pranav.webp",
        linkedin: "https://www.linkedin.com/in/pranavaeron/",
      },
      {
        name: "Yash Katiyar",
        designation: "Team Lead",
        img: "members/yashk.webp",
        linkedin: "https://www.linkedin.com/in/yash-katiyar-4a222a21a/",
      },
      {
        name: "Unnati Agrawal",
        designation: "Team Lead",
        img: "members/unnati.webp",
        linkedin: "https://www.linkedin.com/in/unnati-agarwal-22b95222b/",
      },
    ],
    [
      {
        name: "Shikhar Pathak",
        designation: "Core Member",
        img: "members/shikhar.webp",
        linkedin: "https://www.linkedin.com/in/shikhar-pathak-ab3503259/",
      },
      {
        name: "Vinayak Sharma",
        designation: "Core Member",
        img: "members/vinayak.webp",
        linkedin: "https://www.linkedin.com/in/vinayak-sharma-384936273/",
      },
      {
        name: "Yogesh Jain",
        designation: "Core Member",
        img: "members/yogesh.webp",
        linkedin: "https://www.linkedin.com/in/yogesh-jainfive/",
      },
      {
        name: "Sahil Chauhan",
        designation: "Core Member",
        img: "members/sahil.webp",
        linkedin: "https://www.linkedin.com/in/sahil-chauhan-aa6504286/",
      },
    ],
    [
      // {
      //   name: "Yashpreet Singh",
      //   designation: "Member",
      //   img: "members/yashpreet.webp",
      //   linkedin: "https://www.linkedin.com/in/yashpreet2707/",
      // },
      {
        name: "Yash Dagar",
        designation: "Member",
        img: "members/yash.webp",
        linkedin: "https://www.linkedin.com/in/yoursyash/",
      },
      {
        name: "Manan Shukla",
        designation: "Member",
        img: "members/manan.webp",
        linkedin: "https://www.linkedin.com/in/manan-shukla-18b234299/",
      },
      {
        name: "Vedant Kalla",
        designation: "Member",
        img: "members/vedant.webp",
        linkedin: "https://www.linkedin.com/in/vedant-kalla-a529a6276/",
      },
      {
        name: "Aditi Bansal",
        designation: "Member",
        img: "members/aditi.webp",
        linkedin: "https://www.linkedin.com/in/aditi-bansal-a71127284/",
      },
      {
        name: "Hitesh Matharu",
        designation: "Member",
        img: "members/hitesh.webp",
        linkedin: "http://www.linkedin.com/in/hitesh-matharu/",
      },
      {
        name: "Suyash Patnaik",
        designation: "Member",
        img: "members/suyash.webp",
        linkedin: "https://www.linkedin.com/in/suyash-patnaik-4179a9298/",
      },
      {
        name: "Ishika Verma",
        designation: "Member",
        img: "members/ishika.webp",
        linkedin: "https://www.linkedin.com/in/ishikaaa-verma/",
      },
      {
        name: "Kushagra Bhardwaj",
        designation: "Member",
        img: "members/kushagra.webp",
        linkedin: "https://www.linkedin.com/in/kushagra-bhardwaj-861503251/",
      },
      {
        name: "Angel Garg",
        designation: "Member",
        img: "members/angel.webp",
        linkedin: "https://www.linkedin.com/in/angelgarg/",
      },
      {
        name: "Daksh Sethi",
        designation: "Member",
        img: "members/daksh.webp",
        linkedin: "https://www.linkedin.com/in/daksh-sethi-47a483363/",
      },
      {
        name: "Hardik Raj Kapoor",
        designation: "Member",
        img: "members/hardik.webp",
        linkedin: "https://www.linkedin.com/in/hardik-raj-kapoor-03a680183/",
      },
    ],
  ];

  // Function to generate the correct grid classes based on member count
  const getGridClasses = (memberCount: number) => {
    let classes = "flex flex-wrap justify-center gap-y-8";

    // Add appropriate gap between items based on screen size
    classes += " gap-x-8 md:gap-x-16";

    return classes;
  };

  return (
    <section className="team mb-0">
      <h2>Our Team</h2>
      {memberGroups.map((memberList, index) => (
        <div
          className="sm:px-12 md:px-16 lg:px-32 xl:px-40 mb-16"
          key={index}
        >
          <div className={getGridClasses(memberList.length)}>
            {memberList.map((member) => (
              <div
                className="speaker relative w-full sm:w-5/12 lg:w-3/10 xl:w-1/5 flex-col justify-center"
                key={member["name"]}
              >
                <a href={member["linkedin"]} target="_blank" aria-label={`Visit ${member["name"]} on linkedin`}>
                  <div
                    className="person-img w-fit mx-auto rounded-full border border-black/10">
                    <img
                      alt={member["name"]}
                      src={member["img"]}
                      className="transition-all duration-500 aspect-square w-40 sm:w-32 md:w-40 xl:w-48 object-cover"
                      loading="lazy"
                    />
                    <img
                      alt="linkedin"
                      src="/logos/linkedin_blue.svg"
                      className="absolute w-1/3 top-1/3 left-1/3 bg-white transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </a>
                <div className="text-center text-black text-lg font-semibold capitalize leading-6">
                  {member["name"]}
                </div>
                <div className="mx-auto text-center text-gray-500 text-sm font-medium backdrop-blur-sm border border-black/10 rounded-full px-2 w-fit self-center">
                  {member["designation"]}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Team;
