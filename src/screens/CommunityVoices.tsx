import { useEffect, useState } from "react";

interface YoutubeVideo {
  id: string;
  thumbnail: string;
  title: string;
  url: string;
}

const CommunityVoices: React.FC = () => {
  const videos: YoutubeVideo[] = [
      {
        id: "video1",
        thumbnail: "/communityVoices/1.webp",
        title: "Quickly Set Up a GraphQL API for DynamoDB CRUD operations with AWS AppSync",
        url: "https://youtu.be/n4mxQP-1a3U"
      },
      {
        id: "video2",
        thumbnail: "/communityVoices/2.webp",
        title: "How to Secure AWS API Gateway with Cognito User Pools",
        url: "https://www.youtube.com/watch?v=mhS9EwUCOrc"
      },
      {
        id: "video3",
        thumbnail: "/communityVoices/3.webp",
        title: "AWS Multi-Session Support",
        url: "https://youtu.be/_5qahn-PzAI"
      },
      // Skipped Riddhi Ahuja as no yt video provided
      {
        id: "video4",
        thumbnail: "/communityVoices/4.webp",
        title: "Introduction to Amazon SageMaker AI",
        url: "https://www.youtube.com/watch?v=nGEld_dt84A"
      },
      {
        id: "video5",
        thumbnail: "/communityVoices/5.webp",
        title: "New Announcement on PartyRock",
        url: "https://youtu.be/75lB__qnaZU"
      },
      {
        id: "video6",
        thumbnail: "/communityVoices/6.webp",
        title: "AWS Global Network and Networking Concepts",
        url: "https://youtu.be/KERrvCw8OqA"
      },
      {
        id: "video7",
        thumbnail: "/communityVoices/7.webp",
        title: "S3 Lifecycle Management: From Basics to Best Practices",
        url: "https://youtu.be/xKoCD5jaHeE?si=--gvf1VSj39IrdK1"
      }
  ];

  const [tolerance, setTolerance] = useState(2);
  const [selectedIndex, setIndex] = useState(0);

  const handleShouldShowYoutubeItem = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setTolerance(2);
    } else if (width >= 1024) {
      setTolerance(1);
    } else if (width >= 640) {
      setTolerance(0);
    } else {
      setTolerance(0);
    }
  };

  const handleIndexDecrement = () => setIndex(Math.max(selectedIndex - 1, 0));
  const handleIndexIncrement = () =>
    setIndex(Math.min(selectedIndex + 1, videos.length - tolerance - 1));

  useEffect(() => {
    handleShouldShowYoutubeItem();
    window.addEventListener("resize", handleShouldShowYoutubeItem);
    return () => {
      window.removeEventListener("resize", handleShouldShowYoutubeItem);
    };
  }, []);

  return (
    <section className="youtube py-16">
      <h2 className="mb-8!">Community Voices</h2>
      <p className="justify-center text-lg font-normal tracking-wide mb-12">Hear from the rising stars of the cloud community!</p>
      <div className="flex items-center sm:gap-4">
        <div
          onClick={handleIndexDecrement}
          className="w-12 border border-gray-500/20 aspect-square rounded-full bg-[url('/logos/arrow-left.svg')] transition-all duration-300 bg-white bg-no-repeat bg-center hover:bg-gray-100 cursor-pointer"
        />
        <div className="flex overflow-x-scroll w-full transition-all ease-in-out gap-4">
          {videos.map((video, curIndex) => (
            <div
              className={`${
                curIndex >= selectedIndex && curIndex <= selectedIndex + tolerance ? "" : "hidden"
                } Youtube-item relative flex flex-col flex-1 items-center rounded-md overflow-clip`}
              key={video.id}
            >
              <a href={video.url} aria-label={`See ${video["title"]} on Youtube`} target="_blank" rel="noopener noreferrer" className="w-full">
                <div className="relative group">
                  <div
                    style={{
                      background: `no-repeat center / cover url(${video.thumbnail})`,
                    }}
                    className="flex aspect-video w-full hover:scale-105 hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-black/90 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 ml-2 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white font-medium text-lg">{video.title}</h3>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div
          onClick={handleIndexIncrement}
          className="w-12 border border-gray-500/20 aspect-square rounded-full bg-[url('/logos/arrow-left.svg')] transition-all duration-300 bg-white bg-no-repeat bg-center hover:bg-gray-100/40 rotate-180 cursor-pointer"
        />
      </div>
    </section>
  );
};

export default CommunityVoices;
