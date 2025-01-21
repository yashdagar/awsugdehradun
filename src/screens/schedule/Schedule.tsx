import React, { useRef } from "react"
import "./Schedule.css"

const Schedule = () => {
  const content = [
    {
      heading: "Registration",
      description: "Registration and badge pickup starts at 07:30am",
      time: "9:00 am - 10:00 am",
      hue: "hue-rotate-30",
      icon: "logos/registration.svg",
    },
    {
      heading: "Welcome Note",
      // description: "Welcome to AWS Community Day Dehradun 2024",
      time: "10:00 am - 11:00 am",
      hue: "hue-rotate-90",
      icon: "logos/welcome.svg",
    },
    {
      heading: "Sponsor Talk",
      description: "Registration and badge pickup starts at 07:30am",
      time: "11:00 am - 12:00 pm",
      hue: "-hue-rotate-30",
      icon: "logos/mic.svg",
      people: [
        {
          img: "members/yogesh.jpg",
          name: "Yogesh Jain",
        },
        {
          img: "members/vedant.jpg",
          name: "Vedant",
        },
      ],
    },
    {
      heading: "Coffee Break",
      description: "Registration and badge pickup starts at 07:30am",
      time: "12:00 pm - 1:00 pm",
      hue: "hue-rotate-60",
      icon: "logos/coffee.svg",
    },
    {
      heading: "Speaker Session",
      description: "Registration and badge pickup starts at 07:30am",
      time: "1:00 pm - 2:00 pm",
      hue: "-hue-rotate-90",
      icon: "logos/registration.svg",
    },
    {
      heading: "Lunch",
      description: "Registration and badge pickup starts at 07:30am",
      time: "2:00 pm - 3:00 pm",
      hue: "hue-rotate-30",
      icon: "logos/registration.svg",
    },
    {
      heading: "Speaker Session 2",
      description: "Registration and badge pickup starts at 07:30am",
      time: "3:00 pm - 4:00 pm",
      hue: "-hue-rotate-60",
      icon: "logos/registration.svg",
    },
    {
      heading: "Closing Note",
      description: "Registration and badge pickup starts at 07:30am",
      time: "4:00 pm - 5:00 pm",
      hue: "hue-rotate-180",
      icon: "logos/registration.svg",
    },
  ]
  const time = [
      "9:00 am",
      "9:30 am",
      "10:00 am",
      "10:30 am",
      "11:00 am",
      "11:30 am",
      "12:00 pm",
      "12:30 pm",
      "1:00 pm",
      "1:30 pm",
      "2:00 pm",
      "2:30 pm",
      "3:00 pm",
      "3:30 pm",
      "4:00 pm",
      "4:30 pm",
      "5:00 pm",
      "5:30 pm",
      "6:00 pm",
    ]

  const getDurationHours = (s: String) => {
    const items = s.split(" ")
    const start = time.indexOf(`${items[0]} ${items[1]}`)
    const end = time.indexOf(`${items[3]} ${items[4]}`)
    return time.slice(start, end)
  }

  return (
    <section className="!px-2 md:!px-24 lg:!px-48 schedule">
      <img src="logos/shape1.svg" className="absolute top-0 right-0" />
      <h2>Event Schedule</h2>
      <h3 className="px-1 pb-4 ">23 March 2024</h3>
      <div
        className="timeline w-full border border-[#0002] relative"
      >
        <div className="relative flex flex-col text-black">
          {content.map((item, i) => {
            const times = getDurationHours(item.time);
            return (
              <div className="flex">
                <div className="flex flex-col h-auto">
                {
                 times.map((t) =>
                  <div
                    key={t}
                    className={`w-full h-[-webkit-fill-available] bg-[${i % 2 == 0 ? "#e4e4e4" : "#fafafa"}] flex`}
                  >
                    <div className="border-b border-b-[#0001] bg-white px-4 py-4 w-24 text-center text-sm text-[#888]">
                       {t}
                    </div>
                  </div>
                 )
                }
                </div>
                <div
                  key={i}
                  className={`w-[calc(100vw-10rem)] sm:w-72 h-fit shadow-sm bg-white rounded-lg overflow-clip py-2 px-3 m-4 ${item.hue} border border-[#88f8]`}
                >
                  <div className="w-full bg-white flex items-center gap-2">
                    <div
                      style={{
                        background: "no-repeat center #88f",
                        WebkitMask: `url("${item.icon}")`,
                      }}
                      className="size-8 rounded-md p-1 border border-gray-200"
                    />
                    <div className="flex flex-col">
                      <p className="font-medium text-lg text-gray-900 tracking-normal">
                        {item.heading}
                      </p>
                      <p
                        className={`font-light text-sm tracking-tight text-[#888] ${item.description == null ? "leading-4" : "leading-3"}`}
                      >
                        {item.time}
                      </p>
                    </div>
                  </div>
                  {item.people != null ? (
                    <div className="flex flex-col pt-2 gap-y-[.1rem]">
                      {item.people.map((person) => (
                        <div
                          className="flex text-[#444] text-sm sm:text-base gap-2 items-center underline cursor-pointer"
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
                            className="size-4 rounded-full"
                          />
                          {person.name}
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <p
                    className={`leading-4 tracking-wide text-sm text-[#666] font-normal ${item.description ? (item.people != null ? "pt-2 pb-1" : "pt-4 pb-1") : "pt-2"}`}
                  >
                    {item.description}
                  </p>
                  </div>
              </div>
            )
          })}
        </div>
        {/*time.map((t, i) => (
          <div
            key={i}
            className={`w-full h-20 bg-[${i % 2 == 0 ? "#e4e4e4" : "#fafafa"}] flex`}
          >
            <div className="border-b border-b-[#0001] bg-white px-4 py-8 w-24 text-center text-sm text-[#888]">
              {t}
            </div>
          </div>
        ))*/}
      </div>
    </section>
  )
}

export default Schedule
