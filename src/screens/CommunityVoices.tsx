import { useEffect, useState } from "react";

// Section named as "Community Voices"

// Steal The Spotlight | Community Speaks
// Hear from the rising stars of the cloud community!

// We believe every voice matters—and some shine brighter when given the stage. Presenting handpicked video stories from our “Steal The Spotlight” winners—young, vibrant talents who wowed us with their unique take on tech, innovation, and community spirit.

// From creative cloud experiments to real-world solutions and personal growth journeys, these videos highlight why the AWS Community Day Dehradun 2025 is more than just an event—it's a movement.

// Inke insta video with their youtbe video links linked with that aur linkedin profile and name

// https://docs.google.com/spreadsheets/d/1kOcyatR_7zdqwJh2uiMxsDrDiduy6XfJU_noyywSWYE/edit?usp=sharing

interface InstagramVideo {
  id: string;
  thumbnail: string;
  title: string;
  url: string;
}

const InstagramSection: React.FC = () => {
  const videos: InstagramVideo[] = [
    {
      id: "video1",
      thumbnail: "/instagram/thumbnail1.webp",
      title: "AWS Day Highlights",
      url: "https://instagram.com/awsday/video1"
    },
    {
      id: "video2",
      thumbnail: "/instagram/thumbnail2.webp",
      title: "Behind the Scenes",
      url: "https://instagram.com/awsday/video2"
    },
    {
      id: "video3",
      thumbnail: "/instagram/thumbnail3.webp",
      title: "Cloud Innovation Talk",
      url: "https://instagram.com/awsday/video3"
    },
    {
      id: "video4",
      thumbnail: "/instagram/thumbnail4.webp",
      title: "Tech Demos",
      url: "https://instagram.com/awsday/video4"
    },
    {
      id: "video5",
      thumbnail: "/instagram/thumbnail5.webp",
      title: "Expert Panel",
      url: "https://instagram.com/awsday/video5"
    },
    {
      id: "video6",
      thumbnail: "/instagram/thumbnail6.webp",
      title: "Community Meetup",
      url: "https://instagram.com/awsday/video6"
    }
  ];

  // const [tolerance, setTolerance] = useState(2);
  // const [selectedIndex, setIndex] = useState(0);

  // const handleShouldShowInstagramItem = () => {
  //   const width = window.innerWidth;
  //   if (width >= 1280) {
  //     setTolerance(2);
  //   } else if (width >= 1024) {
  //     setTolerance(1);
  //   } else if (width >= 640) {
  //     setTolerance(0);
  //   } else {
  //     setTolerance(0);
  //   }
  // };

  // const handleIndexDecrement = () => setIndex(Math.max(selectedIndex - 1, 0));
  // const handleIndexIncrement = () =>
  //   setIndex(Math.min(selectedIndex + 1, videos.length - tolerance - 1));

  // useEffect(() => {
  //   handleShouldShowInstagramItem();
  //   window.addEventListener("resize", handleShouldShowInstagramItem);
  //   return () => {
  //     window.removeEventListener("resize", handleShouldShowInstagramItem);
  //   };
  // }, []);

  return (
    <section className="instagram py-16">
      <h2>Instagram</h2>
      <div className="flex items-center sm:gap-4">
        {/* <div
          onClick={handleIndexDecrement}
          className="w-12 border border-gray-500/20 aspect-square rounded-full bg-[url('/logos/arrow-left.svg')] transition-all duration-300 bg-white bg-no-repeat bg-center hover:bg-gray-100 cursor-pointer"
        /> */}
        <div className="flex overflow-x-scroll w-full transition-all ease-in-out gap-4">
          {videos.map((video, curIndex) => (
            <div
              className={`${/*
                curIndex >= selectedIndex && curIndex <= selectedIndex + tolerance ? "" : "hidden"
                */''} instagram-item relative flex flex-col flex-1 items-center rounded-md overflow-clip`}
              key={video.id}
            >
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="w-full">
                <div className="relative group">
                  <div
                    style={{
                      background: `no-repeat center / cover url(${video.thumbnail})`,
                    }}
                    className="flex aspect-5/4 w-full hover:scale-105 hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 border-t-8 border-t-transparent border-l-8 border-l-black border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-medium text-lg">{video.title}</h3>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        {/* <div
          onClick={handleIndexIncrement}
          className="w-12 border border-gray-500/20 aspect-square rounded-full bg-[url('/logos/arrow-left.svg')] transition-all duration-300 bg-white bg-no-repeat bg-center hover:bg-gray-100/40 rotate-180 cursor-pointer"
        /> */}
      </div>
    </section>
  );
};

export default InstagramSection;
