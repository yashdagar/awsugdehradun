import { IconType, SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";

interface Sponsor {
  name: string;
  icon: IconType | string;
  url?: string; // Optional URL property
}

interface Sponsors {
  "Platinum": Sponsor[];
  "Gold": Sponsor[];
  "Silver": Sponsor[];
  "Bronze": Sponsor[];
}

const Sponsors = () => {
  const sponsors : Sponsors = {
    "Platinum": [
      {
        name: "AWS",
        icon: "/sponsors/aws.png",
        url: "https://aws.amazon.com",
      },
    ],
    "Gold": [
      {
        name: "Github",
        icon: SiGithub,
        url: "https://github.com",
      },
    ],
    "Silver": [
      {
        name: "Monster",
        icon: "/sponsors/monster.png",
        url: "https://www.monsterenergy.com/en-in/",
      },
    ],
    "Bronze": []
  };

  return (
    <section className="sponsors">
      <h2>Sponsors</h2>
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
                    <a href={item.url} className="group">
                      <div
                        key={item.name}
                        className="flex flex-col text-center h-[100%] gap-4 justify-between align-middle items-center capitalize px-12 py-4 rounded-3xl border border-gray-100 w-auto1"
                      >
                        <div />
                        {typeof item.icon === "string"? (( 
                          <img
                            alt={item.name} // Added alt attribute for accessibility
                            src={item.icon as string}
                            loading="lazy"
                            className="rounded-lg max-h-24"
                          /> 
                        )): (
                          <item.icon size={64} className="group-hover:scale-105 transition-transform duration-300"/>
                        )}
                        <h5 className="text-gray-500">{item.name}</h5>
                      </div>
                    </a>
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
    </section>
  );
};

export default Sponsors;
