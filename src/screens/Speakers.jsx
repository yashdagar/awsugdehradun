const Speakers = () => {
  const speakers = [
    "Johnni Welch",
    "Florence Jackson",
    "Brandie Palmer",
    "Deanna Little",
    "Jim Grant",
    "Logan Fernandez",
    "Jonathan Lucas",
    "Ethel Medina",
    "Gavin Caldwell",
    "Greg Ray",
  ];

  return (
    <section className="speakers relative px-4 md:px-12 lg:px-24 py-16 justify-between bg-[--dark-gray]">
      <div className="blur2" />
      <h2 className="w-min mx-auto mb-8">SPEAKERS</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {speakers.map((speaker) => (
          <div className="speaker relative border border-[--gray] overflow-clip">
            <img src="https://thispersondoesnotexist.com/" loading="lazy" />
            <div className="absolute bottom-0 w-full p-4 bg-[#333f5380]">
              {speaker}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
