const Venue = () => {
  return (
    <section className="venue pt-8">
      <h2>VENUE</h2>
      <div className="md:flex">
        <iframe
          className="w-max md:w-1/2 lg:w-3/5 map mx-auto md:mx-8 rounded-md h-64 shadow-md shadow-white"
          loading="lazy"
          src="https://maps.google.com/maps?hl=en&amp;q=Saffron hotel mussoorie&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
        <div className="w-max sm:w-1/2 lg:w-2/5 md:my-auto mt-4 mx-auto md:mx-8 flex flex-col items-center md:items-start">
          <h3 className="text-primary md:mb-4 lg:text-5xl">
            The Saffron Leaf Hotel
          </h3>
          <h4 className="text-black">Dehradun 248007</h4>
        </div>
      </div>
    </section>
  );
};

export default Venue;
