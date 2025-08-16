const CommunityPartners = () => {
  
  const communityPartners = [
      {
        name: "UPES CSA",
        icon: "/sponsors/upescsa.png",
        url: "https://www.upescsa.in",
      },
      {
        name: "ACM DITU",
        icon: "/sponsors/acm-dit.jpg",
        url: "https://ditu.acm.org/",
      },
      {
        name: "THE ELITES",
        icon: "/sponsors/the-elites.jpeg",
        url: "https://theelites.in/",
      },

    ];

    return (
        <section>
            <div>
                <div>
                    <h2>Community Partners</h2>
                    <div className="mt-4 mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {communityPartners.map((item) => (
                        <a href={item.url} className="group">
                            <div
                            key={item.name}
                            className="flex flex-col h-[100%] text-center gap-4 justify-between align-middle items-center capitalize px-12 py-4 rounded-3xl border border-gray-100 w-auto1"
                            >
                            <div />
                            <img
                            alt={item.name} // Added alt attribute for accessibility
                            src={item.icon as string}
                            loading="lazy"
                            className="rounded-lg max-h-24 group-hover:scale-105 transition-transform duration-300"
                            />
                            <h5 className="text-gray-500">{item.name}</h5>
                            </div>
                        </a>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommunityPartners
