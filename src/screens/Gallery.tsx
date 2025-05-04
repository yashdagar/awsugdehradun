import { useEffect, useState } from "react";

const Gallery = () => {
  const content: string[] = [
    "gallery/1.webp",
    "gallery/2.webp",
    "gallery/9.webp",
    "gallery/11.webp",
    "gallery/8.webp",
    "gallery/10.webp",
    "gallery/12.webp",
    "gallery/3.webp",
    "gallery/13.webp",
    "gallery/14.webp",
    "gallery/6.webp",
    "gallery/7.webp",
    "gallery/4.webp",
    "gallery/5.webp",
    "gallery/15.webp",
    "gallery/16.webp",
    "gallery/17.webp",
    "gallery/18.webp",
    "gallery/19.webp",
    "gallery/20.webp",
    "gallery/21.webp",
    "gallery/22.webp",
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
      <h2>Gallery</h2>
      <div className="flex items-center sm:gap-4">
        <div
          onClick={handleIndexDecrement}
          className="w-12 border border-gray-500/20 aspect-square rounded-full bg-[url('/logos/arrow-left.svg')] transition-all duration-300 bg-white bg-no-repeat bg-center hover:bg-gray-100"
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
              />
            </div>
          ))}
        </div>
        <div
          onClick={handleIndexInceremnt}
          className="w-12 border border-gray-500/20 aspect-square rounded-full bg-[url('/logos/arrow-left.svg')] transition-all duration-300 bg-white bg-no-repeat bg-center hover:bg-gray-100/40 rotate-180"
        />
      </div>
    </section>
  );
};

export default Gallery;
