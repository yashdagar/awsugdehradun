interface Content {
  heading: string,
  description?: string,
  time: string,
  hue: string,
  icon: string,
  people?: {
    img: string,
    name: string
  }[],
}

const Schedule = () => {
  const generateTimeArray = (startTime: string, endTime: string): string[] => {
    const times: string[] = [];

    const parseTime = (timeStr: string): Date => {
        const date = new Date();
        let [time, ampm] = timeStr.split(" ");
        let [hours, minutes] = time.split(":").map(Number);

        if (ampm === "pm" && hours < 12) {
            hours += 12;
        }
        if (ampm === "am" && hours === 12) { // 12am is 0 hours
            hours = 0;
        }

        date.setHours(hours, minutes, 0, 0);
        return date;
    };

    const start = parseTime(startTime);
    const end = parseTime(endTime);
    let current = start;

    while (current <= end) {
        let hour = current.getHours();
        let minute = current.getMinutes();
        let ampm = hour >= 12 ? "pm" : "am";
        
        // Convert to 12-hour format
        hour = hour % 12;
        hour = hour === 0 ? 12 : hour; // The hour '0' should be '12'

        const timeString = `${hour}:${minute.toString().padStart(2, '0')} ${ampm}`;
        times.push(timeString);

        // Add 15 minutes for the next interval
        current.setMinutes(current.getMinutes() + 30);
    }

    return times;
  };

  // Function to snap time to nearest 15-minute interval
  const snapToNearestInterval = (timeStr: string): string => {
    const parseTime = (timeStr: string): Date => {
        const date = new Date();
        let [time, ampm] = timeStr.split(" ");
        let [hours, minutes] = time.split(":").map(Number);

        if (ampm === "pm" && hours < 12) {
            hours += 12;
        }
        if (ampm === "am" && hours === 12) {
            hours = 0;
        }

        date.setHours(hours, minutes, 0, 0);
        return date;
    };

    const formatTime = (date: Date): string => {
        let hour = date.getHours();
        let minute = date.getMinutes();
        let ampm = hour >= 12 ? "pm" : "am";
        
        hour = hour % 12;
        hour = hour === 0 ? 12 : hour;

        return `${hour}:${minute.toString().padStart(2, '0')} ${ampm}`;
    };

    const time = parseTime(timeStr);
    const minutes = time.getMinutes();
    
    // Round to nearest 15-minute interval
    const roundedMinutes = Math.round(minutes / 15) * 15;
    
    if (roundedMinutes === 60) {
        time.setHours(time.getHours() + 1);
        time.setMinutes(0);
    } else {
        time.setMinutes(roundedMinutes);
    }

    return formatTime(time);
  };

  const content: Content[] = [
    {
      heading: "Registrations & Networking",
      description: "Badge collection & community networking. Participants will collect badges at the desk and interact with fellow attendees.",
      time: "8:30 AM - 9:45 AM",
      hue: "hue-rotate-30",
      icon: "/logos/registration.svg",
    },
    {
      heading: "Welcome Note & Lamp Lighting",
      description: "Formal start. Event will commence with lamp lighting and formal introductions.",
      time: "10:00 AM - 10:25 AM",
      hue: "hue-rotate-90",
      icon: "/logos/welcome.svg",
    },
    {
      heading: "Keynote",
      description: "Opening keynote by Ridhima Kapoor setting the theme of the day.",
      time: "10:25 AM - 10:55 AM",
      hue: "-hue-rotate-30",
      icon: "/logos/mic.svg",
      people: [
        {
          img: "/speakers/ridhima.webp",
          name: "Ridhima Kapoor",
        }
      ],
    },
    {
      heading: "Morning High Tea",
      description: "Refreshments & networking. Attendees enjoy refreshments and casual networking over tea.",
      time: "11:00 AM - 11:30 AM",
      hue: "-hue-rotate-90",
      icon: "/logos/coffee.svg",
    },
    {
      heading: "Session 1 - Agentic AI",
      description: "Shubham Londhe shares insights into the future of Agentic AI.",
      time: "11:30 AM - 12:10 PM",
      hue: "hue-rotate-60",
      icon: "/logos/mic.svg",
      people: [
        {
          img: "/speakers/shubham.webp",
          name: "Shubham Londhe",
        }
      ],
    },
    {
      heading: "Session 2 - Data Engineering",
      description: "Kushal Nagrani covers modern approaches in data engineering.",
      time: "12:10 PM - 12:50 PM",
      hue: "hue-rotate-30",
      icon: "/logos/mic.svg",
      people: [
        {
          img: "/speakers/kushal.webp",
          name: "Kushal Nagrani",
        }
      ],
    },
    {
      heading: "Session 3 - Cloud Security",
      description: "Purnesh Tripathi discusses best practices in securing cloud environments.",
      time: "12:50 PM - 1:30 PM",
      hue: "-hue-rotate-60",
      icon: "/logos/mic.svg",
      people: [
        {
          img: "/speakers/purnesh.webp",
          name: "Purnesh Tripathi",
        }
      ],
    },
    {
      heading: "Networking Break",
      description: "Sponsor booths + informal chats. Attendees visit sponsor booths and connect with peers informally.",
      time: "1:30 PM - 1:55 PM",
      hue: "hue-rotate-180",
      icon: "/logos/welcome.svg",
    },
    {
      heading: "Lunch Break",
      description: "Networking lunch. Networking lunch is served, encouraging interaction among participants.",
      time: "2:00 PM - 3:00 PM",
      hue: "hue-rotate-30",
      icon: "/logos/coffee.svg",
    },
    {
      heading: "Panel Discussion",
      description: "Experts, including Deepankar Anand and Hitesh Sir, discuss Cloud, DevOps, and AI.",
      time: "3:00 PM - 3:30 PM",
      hue: "hue-rotate-90",
      icon: "/logos/mic.svg",
      people: [
        {
          img: "/speakers/deepankar.jpeg",
          name: "Deepankar Anand",
        }
      ],
    },
    {
      heading: "Session 4 - Prompt Engineering",
      description: "Ameya Vaidya presents strategies for effective prompt engineering.",
      time: "3:30 PM - 4:10 PM",
      hue: "-hue-rotate-30",
      icon: "/logos/mic.svg",
      people: [
        {
          img: "/speakers/ameya.webp",
          name: "Ameya Vaidya",
        }
      ],
    },
    {
      heading: "Session 5 - AWS Certifications",
      description: "Shikha Nautiyal guides attendees on AWS certifications and career paths.",
      time: "4:10 PM - 4:50 PM",
      hue: "hue-rotate-60",
      icon: "/logos/mic.svg",
      people: [
        {
          img: "/speakers/shikha.webp",
          name: "Shikha Nautiyal",
        }
      ],
    },
    {
      heading: "Audience Quiz & Interaction",
      description: "Interactive quiz engages the audience with fun cloud-related questions.",
      time: "4:50 PM - 5:10 PM",
      hue: "-hue-rotate-90",
      icon: "/logos/registration.svg",
    },
    {
      heading: "Session 6 - GitHub Actions",
      description: "Himank Varshney demonstrates automation using GitHub Actions.",
      time: "5:10 PM - 5:30 PM",
      hue: "hue-rotate-30",
      icon: "/logos/mic.svg",
      people: [
        {
          img: "/speakers/himank.webp",
          name: "Himank Varshney",
        }
      ],
    },
    {
      heading: "Cultural Performance",
      description: "Enjoy a lively cultural dance performance to energize the audience.",
      time: "5:30 PM - 5:40 PM",
      hue: "-hue-rotate-60",
      icon: "/logos/welcome.svg",
    },
    {
      heading: "Felicitation & Goodies Distribution",
      description: "Speakers, partners, and attendees are honored, followed by swag distribution.",
      time: "5:40 PM - 6:00 PM",
      hue: "hue-rotate-180",
      icon: "/logos/registration.svg",
    },
  ];

  const time: string[] = generateTimeArray("8:00 am", "5:30 pm");

  const getDurationHours = (s: String) => {
    const items = s.split(" ")
    const startTime = `${items[0]} ${items[1]}`
    const endTime = `${items[3]} ${items[4]}`
    
    // Snap times to nearest 15-minute intervals
    const snappedStart = snapToNearestInterval(startTime)
    const snappedEnd = snapToNearestInterval(endTime)
    
    const start = time.indexOf(snappedStart)
    const end = time.indexOf(snappedEnd)
    
    // If end time is not found, find the closest time before it
    let actualEnd = end
    if (end === -1) {
      // Find the last time slot that is before or equal to the original end time
      for (let i = time.length - 1; i >= 0; i--) {
        const currentTime = time[i]
        if (isTimeBefore(currentTime, endTime) || currentTime === snappedEnd) {
          actualEnd = i
          break
        }
      }
    }
    
    return start !== -1 && actualEnd !== -1 ? time.slice(start, actualEnd + 1) : [snappedStart]
  }

  // Helper function to check if time1 is before time2
  const isTimeBefore = (time1: string, time2: string): boolean => {
    const parseTime = (timeStr: string): Date => {
      const date = new Date();
      let [time, ampm] = timeStr.split(" ");
      let [hours, minutes] = time.split(":").map(Number);

      if (ampm === "pm" && hours < 12) {
          hours += 12;
      }
      if (ampm === "am" && hours === 12) {
          hours = 0;
      }

      date.setHours(hours, minutes, 0, 0);
      return date;
    };

    return parseTime(time1) < parseTime(time2);
  }

  return (
    <section className="!px-2 md:!px-24 lg:!px-48 schedule">
      <h2>Event Schedule</h2>
      <div className="flex ">
        <h4 className="px-1 pb-4">10 September 2025</h4>
        {/* <a href="/schedule.pdf" target="_blank" className="cursor-pointer bg-[#36affa] text-white px-5 py-2 mb-2 rounded-lg items-center font-medium text-lg ml-auto flex gap-x-1">
          Download
          <ArrowDown size={18} strokeWidth={2.5}/> 
        </a> */}
      </div>
      <div
        className="timeline w-full border border-[#bbb8] rounded-md overflow-clip relative"
      >
        <div className="cloud1" />
        <div className="cloud2" />
        <div className="cloud3" />
        <div className="cloud4" />
        <div className="cloud5" />
        <div className="relative flex flex-col text-black">
          {content.map((item: Content, i) => {
            const times = getDurationHours(item.time);
            return (
              <div className="flex" key={i}>
                <div className="flex flex-col h-auto">
                {
                 times.map((t) =>
                  <div
                    key={t}
                    className={`w-full h-full flex`}
                  >
                    <div className="border-b border-b-gray-500/25 bg-white/50 px-4 py-4 w-24 font-normal text-center text-sm text-[#666]">
                       {t}
                    </div>
                  </div>
                 )
                }
                </div>
                <div
                  className={`w-full lg:w-2/3 xl:w-1/2 sm:mx-8 h-auto backdrop-blur-sm bg-white/50 rounded-lg overflow-clip py-3 px-4 mx-4 my-1 sm:m-4 border border-white/80 inset-shadow`}
                >
                  <div className="w-full flex items-center gap-2">
                    <div
                      style={{
                        background: "no-repeat center #88f",
                        WebkitMask: `no-repeat url("${item.icon}")`,
                      }}
                      className={`size-8 rounded-md ${item.hue}`}
                    />
                    <div className="flex flex-col">
                      <p className="font-medium text-lg leading-4 mb-1 text-gray-900 tracking-normal">
                        {item.heading}
                      </p>
                      <p
                        className={`font-light text-sm tracking-tight text-gray-500 ${item.description == null ? "leading-4" : "leading-3"}`}
                      >
                        {item.time}
                      </p>
                    </div>
                  </div>
                  {item.people != null ? (
                    <div className="flex flex-col px-1 pt-2 gap-y-[.1rem]">
                      {item.people.map((person: {img: string, name:string}) => (
                        <div
                          className="flex text-[#444] text-xs sm:text-sm md:text-base gap-2 items-center underline cursor-pointer"
                          onClick={() =>
                            document
                              .getElementsByClassName("speakers")[0]
                              .scrollIntoView({ behavior: "smooth" })
                          }
                        >
                          <div
                            style={{
                              background: `no-repeat center / cover url(${person.img})`,
                            }}
                            className="size-6 rounded-full"
                          />
                          {person.name}
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <p
                    className={`leading-4 tracking-wide text-sm text-[#666] font-normal px-1 ${item.description ? (item.people != null ? "pt-2 pb-1" : "pt-2 pb-1") : "pt-2"}`}
                  >
                    {item.description}
                  </p>
                  </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Schedule