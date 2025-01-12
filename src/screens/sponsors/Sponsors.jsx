import "./Sponsors.css";

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
    gold: [
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
    silver: [
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
    bronze: [
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
  };
  return (
    <section className="sponsors">
      <h2>SPONSORS</h2>
      <div className="items-center">
        {Object.entries(sponsors).map((entry, index) => (
          <div key={entry}>
            <h3 className="text-primary font-semibold">
              {entry[0].toUpperCase()}
            </h3>
            <div className="mt-4 mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {entry[1].map((item) => (
                <div
                  key={item["name"]}
                  className="flex flex-col text-center gap-4 justify-between align-middle capitalize px-8 py-4 rounded-md border border-gray-200 w-auto"
                >
                  <div />
                  <img
                    src={item["icon"]}
                    loading="lazy"
                    className="rounded-md"
                  />
                  <h4 key={item["name"]}>{item["name"]}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
