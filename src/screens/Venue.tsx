const Venue = () => {
  return (
    <section className="venue pt-8">
      <h2>Venue</h2>
      <div className="md:flex rounded-lg overflow-clip">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.72538042432!2d78.01713465!3d30.32542845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1745409011229!5m2!1sen!2sin"
          className="w-full md:w-1/2 lg:w-1/2 map mx-auto h-64 shadow-md shadow-white"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" />
        <div className="w-full sm:w-1/2 lg:w-1/2 md:py-auto pt-4 mx-auto md:px-8 flex flex-col justify-center items-center md:items-start before:bg-[url('https://t3.ftcdn.net/jpg/03/32/64/88/360_F_332648821_KISx3jLU0fuYlZNi8yLqmHY4Hfv0U1ce.jpg')] before:bg-cover before:z-20 before:brightness-50 relative before:top-0 before:left-0 before:content=[''] before:w-full before:h-full before:absolute backdrop-blur-sm">
          <h2 className="text-primary md:mb-2 lg:text-4xl">
            Dehradun
          </h2>
          {/* <h4 className="text-gray-100 font-normal">3-4, 152, Rajpur Rd, Jakhan, Dehradun, Uttarakhand 248001</h4> */}
        </div>
      </div>
    </section>

    // Main Venue Code
    // <section className="venue pt-8">
    //   <h2>Venue</h2>
    //   <div className="md:flex rounded-lg overflow-clip">
    //     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.498074607357!2d78.0701722!3d30.365211600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d760d9a85bc1%3A0xc15c4fb2aac68aee!2sHyatt%20Centric%20Dehradun!5e0!3m2!1sen!2sin!4v1738053598210!5m2!1sen!2sin"
    //       className="w-full md:w-1/2 lg:w-3/5 map mx-auto h-64 shadow-md shadow-white"
    //       allowFullScreen=""
    //       loading="lazy"
    //       referrerPolicy="no-referrer-when-downgrade" />
    //     <div className="w-max sm:w-1/2 lg:w-2/5 md:py-auto pt-4 mx-auto md:px-8 flex flex-col justify-center items-center md:items-start before:bg-[url('/logos/bg_venue.jpg')] before:bg-cover before:z-20 before:brightness-50 relative before:top-0 before:left-0 before:content=[''] before:w-full before:h-full before:absolute backdrop-blur-sm">
    //       <h3 className="text-primary md:mb-2 lg:text-4xl">
    //         Hyatt Centric Dehradun
    //       </h3>
    //       <h4 className="text-gray-100 font-normal">3-4, 152, Rajpur Rd, Jakhan, Dehradun, Uttarakhand 248001</h4>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Venue;
