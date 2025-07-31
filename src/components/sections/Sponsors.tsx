import { IconType, SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";

interface Sponsor {
  name: string;
  icon: IconType | string;
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
    silver: [
      {
        name: "Github",
        icon: SiGithub,
        url: "https://kanan.co",
      },
    ],
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
                        {item.icon && (
                          <item.icon size={64}/>
                        )}

                        {item.icon instanceof String && ( <img
                          alt={item.name} // Added alt attribute for accessibility
                          src={item.icon as string}
                          loading="lazy"
                          className="rounded-lg max-h-24"
                        /> )}
                        <h5 className="text-gray-500">{item.name}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <a target="_blank" href="mailto:awsugdehradun@gmail.com?subject=[Your Company Name] - Sponsorship Proposal" aria-label="Mail to awsugdehradun@gmail.com" className="link font-medium! group flex items-center">
            Become a sponsor 
            <ArrowUpRight className="size-4 lg:size-6 group-hover:-translate-y-0.5 group-hover:translate-x-1 transition-transform text-[rgb(49,166,250]" />
          </a>
        </div>
      ) : (
        <div className="h-40 content-center">
          <a href="mailto:awsugdehradun@gmail.com?subject=[Your Company Name] - Sponsorship Proposal" aria-label="Mail to awsugddn@gmail.com">
          <button className="group">
            <div className="text-xl font-bold">Become a sponsor</div> 
            <ArrowUpRight size={28} className="group-hover:-translate-y-0.5 group-hover:translate-x-1 transition-transform text-[rgb(49,166,250]" />
          </button>
          </a>
          <a href="/brochure.pdf" download="brochure.pdf" className="group">
            <div className="font-semibold! flex text-[rgb(49,166,250)] mt-8">
              Download brochure
              <ArrowUpRight size={20} className="group-hover:-translate-y-0.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      )}
    </section>
  );
};

export default Sponsors;
