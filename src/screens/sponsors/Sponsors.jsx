import LinkIcon from "../../components/icons/link";

const Sponsors = () => {
  const sponsors = {
    platinum: [
      {
        name: "Kanan",
        icon: "https://awsugddn.in/images/Kanan_DEHRADUN%20(1).png",
        url: "https://kanan.co",
      },
      {
        name: "Whizlabs",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvddrAXpW8iZk3ONVJ1iTpQ-zlWs1eAwP9Lw&s",
        url: "https://www.whizlabs.com/",
      },
    ],
    gold: [],
    silver: [],
    bronze: [],
  };
  return (
    <section className="sponsors">
      <h2>Sponsors</h2>
      <div className="items-center">
        {Object.entries(sponsors).map((entry) => (
          <div key={entry} className={entry[1].length == 0 ? "hidden " : ""}>
            <h3 className="text-primary font-semibold">
              {entry[0].toUpperCase()}
            </h3>
            <div className="mt-4 mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {entry[1].map((item) => (
                <div
                  key={item["name"]}
                  className="flex flex-col text-center gap-4 justify-between align-middle items-center capitalize px-12 py-4 rounded-3xl border border-gray-100 w-auto1"
                >
                  <div />
                  <img
                    src={item["icon"]}
                    loading="lazy"
                    className="rounded-lg max-h-24"
                  />
                  <h5 className="text-gray-500">{item["name"]}</h5>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <a href="mailto:awsugdehradun@gmail.com?subject=[Your Company Name] - Sponsorship Proposal">
        <h5 className="link">
          Become a sponsor <LinkIcon />
        </h5>
      </a>
    </section>
  );
};

export default Sponsors;
