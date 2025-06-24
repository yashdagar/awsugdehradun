import LinkIcon from "../icons/link";

interface Sponsor {
  name: string;
  icon: string;
  url?: string; // Optional URL property
}

interface Sponsors {
  platinum: Sponsor[];
  gold: Sponsor[];
  silver: Sponsor[];
  bronze: Sponsor[];
}

const Sponsors = () => {
  const sponsors : Sponsors = {
    platinum: [
      // Example
      // {
      //   name: "Kanan",
      //   icon: "https://awsugddn.in/images/Kanan_DEHRADUN%20(1).png",
      //   url: "https://kanan.co",
      // },
    ],
    gold: [],
    silver: [],
    bronze: [],
  };

  const hasSponsors =
    sponsors.bronze.length > 0 ||
    sponsors.gold.length > 0 ||
    sponsors.platinum.length > 0 ||
    sponsors.silver.length > 0;

  return (
    <section className="sponsors">
      <h2>Sponsors</h2>
      {hasSponsors ? (
        <div className="items-center">
          <div>
            {(Object.keys(sponsors) as (keyof Sponsors)[]).map((category) => {
              const items = sponsors[category];
              return (
                <div key={category} className={items.length === 0 ? 'hidden' : ''}>
                  <h3 className="text-primary font-semibold">
                    {category.toUpperCase()}
                  </h3>
                  <div className="mt-4 mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {items.map((item) => (
                      <div
                        key={item.name}
                        className="flex flex-col text-center gap-4 justify-between align-middle items-center capitalize px-12 py-4 rounded-3xl border border-gray-100 w-auto1"
                      >
                        <div />
                        <img
                          alt={item.name} // Added alt attribute for accessibility
                          src={item.icon}
                          loading="lazy"
                          className="rounded-lg max-h-24"
                        />
                        <h5 className="text-gray-500">{item.name}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <a target="_blank" href="mailto:awsugdehradun@gmail.com?subject=[Your Company Name] - Sponsorship Proposal" aria-label="Mail to awsugddn@gmail.com" className="link">
            Become a sponsor <LinkIcon color="rgb(49, 166, 250)" />
          </a>
        </div>
      ) : (
        <div className="h-40 content-center">
          <a href="mailto:awsugdehradun@gmail.com?subject=[Your Company Name] - Sponsorship Proposal" aria-label="Mail to awsugddn@gmail.com">
          <button>
            <div className="text-xl font-bold">Become a sponsor</div> <LinkIcon />
          </button>
          </a>
          <a href="/brochure.pdf" download="brochure.pdf">
            <div className="link mt-8">Download brochure <LinkIcon color="rgb(49, 166, 250)"/></div>
          </a>
        </div>
      )}
    </section>
  );
};

export default Sponsors;
