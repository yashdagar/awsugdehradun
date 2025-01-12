const Team = () => {
  const members = [
    {
      name: "Aditi Bansal",
      designation: "CTO & Founder",
      img: "members/aditi.png",
      linkedin: "https://www.linkedin.com/in/aditi-bansal-a71127284/",
    },
    {
      name: "Aditya Pandey",
      designation: "CTO & Founder",
      img: "members/aditya.jpg",
      linkedin: "https://www.linkedin.com/in/adityapandey23/",
    },
    {
      name: "Hitesh Matharu",
      designation: "CTO & Founder",
      img: "members/hitesh.jpg",
      linkedin: "http://www.linkedin.com/in/hitesh-matharu/",
    },
    {
      name: "Yash Katiyar",
      designation: "CTO & Founder",
      img: "members/yash_katiyar.jpg",
      linkedin: "https://www.linkedin.com/in/yash-katiyar-4a222a21a/",
    },
    {
      name: "Yogesh Jain",
      designation: "CTO & Founder",
      img: "members/yogesh.jpg",
      linkedin: "https://www.linkedin.com/in/yogesh-jainfive/",
    },
    {
      name: "Sahil Chauhan",
      designation: "CTO & Founder",
      img: "members/sahil.jpg",
      linkedin: "https://www.linkedin.com/in/sahil-chauhan-aa6504286/",
    },
    {
      name: "Shikhar Pathak",
      designation: "CTO & Founder",
      img: "members/shikhar.jpg",
      linkedin: "https://www.linkedin.com/in/shikhar-pathak-ab3503259/",
    },
    {
      name: "Kushagra Bhardwaj",
      designation: "CTO & Founder",
      img: "members/kushagra.png",
      linkedin: "https://www.linkedin.com/in/kushagra-bhardwaj-861503251/",
    },
    {
      name: "Vedant Kalla",
      designation: "CTO & Founder",
      img: "members/vedant.jpg",
      linkedin: "https://www.linkedin.com/in/vedant-kalla-a529a6276/",
    },
    {
      name: "Manan Shukla",
      designation: "CTO & Founder",
      img: "members/manan.jpg",
      linkedin: "https://www.linkedin.com/in/manan-shukla-18b234299/",
    },
    {
      name: "Yashpreet Singh",
      designation: "CTO & Founder",
      img: "members/yashpreet.jpeg",
      linkedin: "https://www.linkedin.com/in/yashpreet2707/",
    },
    {
      name: "Vinayak Sharma",
      designation: "CTO & Founder",
      img: "members/vinayak.jpg",
      linkedin: "https://www.linkedin.com/in/vinayak-sharma-384936273/",
    },
    {
      name: "Yakshu Makkar",
      designation: "CTO & Founder",
      img: "members/yakshu.jpg",
      linkedin: "https://www.linkedin.com/in/yakshu-makkar-ym39/",
    },
    {
      name: "Yash Dagar",
      designation: "CTO & Founder",
      img: "members/yash_dagar.jpg",
      linkedin: "https://www.linkedin.com/in/yoursyash/",
    },
    {
      name: "Pranav Aeron",
      designation: "CTO & Founder",
      img: "members/pranav.jpeg",
      linkedin: "https://www.linkedin.com/in/pranavaeron/",
    },
  ];

  return (
    <section className="team">
      <h2>OUR TEAM</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {members.map((member) => (
          <div
            className="speaker relative mx-auto flex flex-col"
            key={member["name"]}
          >
            <a href={member["linkedin"]} target="_blank">
              <div
                className="person-img overflow-clip w-fit mx-auto rounded-full border border-[#0002]"
                loading="lazy"
              >
                <img
                  src={member["img"]}
                  className="transition-all duration-500 aspect-square w-36 md:w-40 xl:w-48 object-cover"
                />
                <img
                  src="logos/linkedin.svg"
                  className="absolute w-1/3 h-1/3 top-1/3 left-1/3 invert"
                />
              </div>
            </a>
            <h4 className="text-center text-black text-lg font-semibold capitalize">
              {member["name"]}
            </h4>
            <div className="text-center text-gray-900 text-sm font-medium backdrop-blur-sm border border-[#0002] rounded-full px-2 w-fit self-center">
              {member["designation"]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
