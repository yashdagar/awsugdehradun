import React, { useEffect, useRef } from "react";
import "./Schedule.css";

const Schedule = () => {
  const content = [
    {
      icon: "id_icon.svg",
      heading: "Registration",
      description: "Registration and badge pickup starts at 07:30am",
      time: "07:00 - 09:00",
    },
    {
      icon: "id_icon.svg",
      heading: "Welcome Note",
      description: "Welcome to AWS Community Day Dehradun 2024",
      time: "07:00 - 09:00",
    },
    {
      icon: "id_icon.svg",
      heading: "Sponsor Talk",
      description: "Registration and badge pickup starts at 07:30am",
      time: "07:00 - 09:00",
    },
    {
      icon: "id_icon.svg",
      heading: "Coffee Break",
      description: "Registration and badge pickup starts at 07:30am",
      time: "07:00 - 09:00",
    },
    {
      icon: "id_icon.svg",
      heading: "Speaker Session",
      description: "Registration and badge pickup starts at 07:30am",
      time: "07:00 - 09:00",
    },
    {
      icon: "id_icon.svg",
      heading: "Lunch",
      description: "Registration and badge pickup starts at 07:30am",
      time: "07:00 - 09:00",
    },
    {
      icon: "id_icon.svg",
      heading: "Speaker Session 2",
      description: "Registration and badge pickup starts at 07:30am",
      time: "07:00 - 09:00",
    },
    {
      icon: "id_icon.svg",
      heading: "Closing Note",
      description: "Registration and badge pickup starts at 07:30am",
      time: "07:00 - 09:00",
    },
  ];

  const wrapperRef = useRef(null);
  const counters = Array.from(useRef(null) * content.length);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const wrapper = wrapperRef.current;
      if (wrapper) {
        const cards = wrapper.querySelectorAll(".timeline-item");

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          card.style.setProperty("--x", `${x}px`);
          card.style.setProperty("--y", `${y}px`);
        });
      }
    };

    addEventListener("mousemove", handleMouseMove);

    return () => removeEventListener("mousemove", handleMouseMove);
  }, [wrapperRef]);

  useEffect(() => {
    const handleCounterSize = () => {
      const items = document.getElementsByClassName("timeline-counter");
      const first = items[0];
      const last = items[items.length - 1];

      console.log(first.clientX);
      console.log(first.getBoundingClientRect.x);

      first.style.setProperty(
        "--counter-height",
        `${last.getBoundingClientRect.clientX - first.getBoundingClientRect.clientX}px`,
      );
    };

    addEventListener("load", () => handleCounterSize);

    return () => removeEventListener("load", handleCounterSize);
  }, []);

  return (
    <section className="schedule">
      <h2>EVENT SCHEDULE</h2>
      <div className="timeline w-full" ref={wrapperRef}>
        {content.map((item, index) => (
          <div key={index} className="timeline-item flex w-full">
            {/* <div
              className={`relative timeline-counter ${index == 0 ? "first" : ""} justify-center items-center aspect-square h-10 text-center my-auto hidden sm:flex rounded-full border border-[#fff4]] bg-white z-10`}
            >
              {index + 1}
            </div> */}
            <div></div>
            <div
              key={item["heading"]}
              className="timeline-container rounded-xl overflow-clip px-4 sm:px-8 py-6 sm:py-8 sm:ml-8 w-full mb-2 relative flex justify-stretch"
            >
              <img
                src="logos/id.svg"
                className="rounded-full border border-black aspect-square p-1 sm:p-3 overflow-visible w-8 sm:w-16 h-fit z-10"
              />
              <div className="ml-4 sm:ml-8 block w-full z-10 gap-y-8">
                <h4 className="justify-between flex text-lg sm:text-xl md:text-2xl text-primary">
                  {item["heading"]}
                  <div className="mx-auto" />
                  <span className="font-thin text-base md:text-lg lg:text-2xl flex text-nowrap">
                    {item["time"]}
                  </span>
                </h4>
                <p className="text-sm sm:text-base md:text-lg font-[550] tracking-wider italic">
                  {item["description"]}
                </p>
                <p className="text-xs md:text-base ml-[2.5rem]] text-gray-900">
                  Exciting gifts await the first 100 Early Bird attendees—don’t
                  miss out!
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
