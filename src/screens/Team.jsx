const Team = () => {
  const members = [
    {
      name: "Aditya Pandey",
      designation: "Organizer",
      img: "members/aditya.jpg",
      linkedin: "https://www.linkedin.com/in/adityapandey23/",
    },
    {
      name: "Yakshu Makkar",
      designation: "Co-organizer",
      img: "members/yakshu.jpg",
      linkedin: "https://www.linkedin.com/in/yakshu-makkar-ym39/",
    },
    {
      name: "Unnati Agrawal",
      designation: "Member",
      img: "members/unnati.jpg",
      linkedin: "https://www.linkedin.com/in/unnati-agarwal-22b95222b/",
    },
    {
      name: "Vaishnavi Srivastava",
      designation: "Member",
      img: "members/vaishnavi.jpeg",
      linkedin: "https://www.linkedin.com/in/vaishnavi7279/",
    },
    {
      name: "Pranav Aeron",
      designation: "Member",
      img: "members/pranav.jpeg",
      linkedin: "https://www.linkedin.com/in/pranavaeron/",
    },
    {
      name: "Yash Katiyar",
      designation: "Member",
      img: "members/yash_katiyar.jpg",
      linkedin: "https://www.linkedin.com/in/yash-katiyar-4a222a21a/",
    },
    {
      name: "Sahil Chauhan",
      designation: "Member",
      img: "members/sahil.jpg",
      linkedin: "https://www.linkedin.com/in/sahil-chauhan-aa6504286/",
    },
    {
      name: "Aditi Bansal",
      designation: "Member",
      img: "members/aditi.png",
      linkedin: "https://www.linkedin.com/in/aditi-bansal-a71127284/",
    },
    {
      name: "Hitesh Matharu",
      designation: "Member",
      img: "members/hitesh.jpg",
      linkedin: "http://www.linkedin.com/in/hitesh-matharu/",
    },
    {
      name: "Yogesh Jain",
      designation: "Member",
      img: "members/yogesh.jpg",
      linkedin: "https://www.linkedin.com/in/yogesh-jainfive/",
    },
    {
      name: "Shikhar Pathak",
      designation: "Member",
      img: "members/shikhar.jpg",
      linkedin: "https://www.linkedin.com/in/shikhar-pathak-ab3503259/",
    },
    {
      name: "Kushagra Bhardwaj",
      designation: "Member",
      img: "members/kushagra.png",
      linkedin: "https://www.linkedin.com/in/kushagra-bhardwaj-861503251/",
    },
    {
      name: "Yashpreet Singh",
      designation: "Member",
      img: "members/yashpreet.jpeg",
      linkedin: "https://www.linkedin.com/in/yashpreet2707/",
    },
    {
      name: "Vinayak Sharma",
      designation: "Member",
      img: "members/vinayak.jpg",
      linkedin: "https://www.linkedin.com/in/vinayak-sharma-384936273/",
    },
    {
      name: "Yash Dagar",
      designation: "Member",
      img: "members/yash_dagar.jpg",
      linkedin: "https://www.linkedin.com/in/yoursyash/",
    },
    {
      name: "Vedant Kalla",
      designation: "Member",
      img: "members/vedant.jpg",
      linkedin: "https://www.linkedin.com/in/vedant-kalla-a529a6276/",
    },
    {
      name: "Manan Shukla",
      designation: "Member",
      img: "members/manan.jpg",
      linkedin: "https://www.linkedin.com/in/manan-shukla-18b234299/",
    },
  ];

  return (
    <section className="team">
      <h2>Our Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 select-none">
        {members.map((member) => (
          <div
            className="speaker relative mx-auto flex flex-col"
            key={member["name"]}
          >
            <a href={member["linkedin"]} target="_blank">
              <div
                className="person-img w-fit mx-auto rounded-full border border-[#0002]"
                loading="lazy"
              >
                <img
                  src={member["img"]}
                  className="transition-all duration-500 aspect-square w-36 md:w-40 xl:w-48 object-cover"
                />
                <img
                  src="logos/linkedin_blue.svg"
                  className="absolute w-1/3 top-1/3 left-1/3 bg-white transition-all duration-300"
                />
              </div>
            </a>
            <h4 className="text-center text-black text-lg font-semibold capitalize">
              {member["name"]}
            </h4>
            <div className="text-center text-gray-500 text-sm font-medium backdrop-blur-sm border border-[#0002] rounded-full px-2 w-fit self-center">
              {member["designation"]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
