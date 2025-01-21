import { useEffect } from "react";
import { useState } from "react";

const Gallery = () => {
  const content = [
    "gallery/1.jpg",
    "gallery/2.jpg",
    "gallery/3.jpg",
    "gallery/8.jpg",
    "gallery/9.jpg",
    "gallery/10.jpg",
    "gallery/11.jpg",
    "gallery/12.jpg",
    "gallery/13.jpg",
    "gallery/14.jpg",
    "gallery/6.jpg",
    "gallery/7.jpg",
    "gallery/4.jpg",
    "gallery/5.jpg",
    "gallery/15.jpg",
    "gallery/16.jpg",
    "gallery/17.jpg",
    "gallery/18.jpeg",
    "gallery/19.jpeg",
    "gallery/20.jpeg",
    "gallery/21.jpeg",
    "gallery/22.jpeg",
  ];

  const [tolerance, setTolerance] = useState(3);
  const [selectedIndex, setIndex] = useState(0);

  const handleShouldShowGalleryItem = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setTolerance(3);
    } else if (width >= 1024) {
      setTolerance(2);
    } else if (width >= 640) {
      setTolerance(1);
    } else {
      setTolerance(0);
    }
  };

  const handleIndexDecrement = () => setIndex(Math.max(selectedIndex - 1, 0));
  const handleIndexInceremnt = () =>
    setIndex(Math.min(selectedIndex + 1, content.length - tolerance - 1));

  useEffect(() => {
    handleShouldShowGalleryItem();
    window.addEventListener("resize", handleShouldShowGalleryItem);

    return () => {
      window.removeEventListener("resize", handleShouldShowGalleryItem);
    };
  }, []);

  return (
    <section className="gallery !px-4 sm:px-8">
      <h2>Gallery</h2>
      <div className="flex items-center">
        <div
          onClick={handleIndexDecrement}
          className="w-12 aspect-square mr-4 rounded-full bg-[url('logos/arrow-left.svg')] transition-all duration-300 bg-white bg-no-repeat bg-center hover:bg-gray-100"
        />
        <div className="flex overflow-x-scroll w-full transition-all ease-in-out gap-4">
          {content.map((item, curIndex) => (
            <div
              className={`${curIndex >= selectedIndex && curIndex <= selectedIndex + tolerance ? "" : "hidden"} gallery-item relative flex flex-col flex-1 items-center  rounded-md overflow-clip`}
              key={item + curIndex}
            >
              <div
                style={{
                  background: `no-repeat center / cover url(${item})`,
                }}
                className={`flex aspect-video w-full hover:scale-110 hover:brightness-75 transition-all duration-300`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div
          onClick={handleIndexInceremnt}
          className="w-12 aspect-square ml-4 rounded-full bg-[url('logos/arrow-left.svg')] transition-all duration-300 bg-white bg-no-repeat bg-center hover:bg-gray-100 rotate-180"
        />
      </div>
    </section>
  );
};

export default Gallery;
