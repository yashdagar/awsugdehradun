const Venue = () => {
  return (
    // <section className="venue pt-8">
    //   <h2>Venue</h2>
    //   <div className="md:flex rounded-lg overflow-clip">
    //     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.72538042432!2d78.01713465!3d30.32542845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1745409011229!5m2!1sen!2sin"
    //       className="w-full md:w-1/2 lg:w-1/2 map mx-auto h-64 shadow-md shadow-white"
    //       allowFullScreen={false}
    //       title="google map"
    //       loading="lazy"
    //       referrerPolicy="no-referrer-when-downgrade" />
    //     <div className="w-full sm:w-1/2 lg:w-1/2 md:py-auto pt-4 mx-auto md:px-8 flex flex-col justify-center items-center md:items-start before:bg-[url('/logos/dehradun.webp')] before:bg-cover before:z-20 before:brightness-50 relative before:top-0 before:left-0 before:content=[''] before:w-full before:h-full before:absolute backdrop-blur-sm">
    //       <h2 className="text-primary md:mb-2 lg:text-4xl">
    //         Dehradun
    //       </h2>
    //       {/* <h4 className="text-gray-100 font-normal">3-4, 152, Rajpur Rd, Jakhan, Dehradun, Uttarakhand 248001</h4> */}
    //     </div>
    //   </div>
    // </section>

    // Main Venue Code
    <section className="venue pt-8">
      <h2>Venue</h2>
      <div className="md:flex rounded-lg overflow-clip">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.7133158261295!2d77.966747!3d30.415874700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d4890d7c1735%3A0x22d3ae324c238e3c!2sUPES!5e0!3m2!1sen!2sin!4v1754816781558!5m2!1sen!2sin"
          className="w-full md:w-1/2 lg:w-1/2 map mx-auto h-64 shadow-md shadow-white"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" />
        <div className="w-full sm:w-1/2 lg:w-1/2 md:py-auto py-4 mx-auto px-4 md:px-8 flex flex-col justify-center items-center md:items-start before:bg-[url('/logos/upes.jpg')] before:bg-cover before:z-20 before:brightness-50 relative before:top-0 before:left-0 before:content=[''] before:w-full before:h-full before:absolute backdrop-blur-sm">
          <h3 className="text-primary md:mb-2 text-2xl lg:text-4xl">
            UPES Dehradun
          </h3>
          <p className="text-white font-light! text-sm lg:text-xl">ENERGY ACRES, UPES, BIDHOLI, via, Prem Nagar, Uttarakhand 248007</p>
        </div>
      </div>
    </section>
  );
};

export default Venue;
