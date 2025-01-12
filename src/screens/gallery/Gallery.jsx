import { useEffect } from "react";
import { useState } from "react";

const Gallery = () => {
  const content = [
    "https://picsum.photos/seed/q/1600/900",
    "https://picsum.photos/seed/w/1600/900",
    "https://picsum.photos/seed/e/1600/900",
    "https://picsum.photos/seed/d/1600/900",
    "https://picsum.photos/seed/t/1600/900",
    "https://picsum.photos/seed/y/1600/900",
    "https://picsum.photos/seed/u/1600/900",
    "https://picsum.photos/seed/i/1600/900",
    "https://picsum.photos/seed/o/1600/900",
    "https://picsum.photos/seed/p/1600/900",
    "https://picsum.photos/seed/a/1600/900",
    "https://picsum.photos/seed/s/1600/900",
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
    <section className="gallery">
      <h2>GALLERY</h2>
      <div className="flex items-center">
        <div
          onClick={handleIndexDecrement}
          className="w-12 aspect-square mr-4 rounded-full bg-[url('logos/arrow-left.svg')] bg-white bg-no-repeat bg-center hover:bg-gray-100"
        />
        <div className="flex overflow-x-scroll w-full transition-all ease-in-out gap-4">
          {content.map((item, curIndex) => (
            <div
              className={`${curIndex >= selectedIndex && curIndex <= selectedIndex + tolerance ? "" : "hidden"} speaker relative flex flex-col flex-1 items-center`}
              key={item + curIndex}
            >
              <div
                className={`flex aspect-video w-full bg-contain bg-no-repeat rounded-md`}
                style={{ background: `url(${item})` }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div
          onClick={handleIndexInceremnt}
          className="w-12 aspect-square ml-4 rounded-full bg-[url('logos/arrow-left.svg')] bg-white bg-no-repeat bg-center hover:bg-gray-100 rotate-180"
        />
      </div>
    </section>
  );
};

export default Gallery;
