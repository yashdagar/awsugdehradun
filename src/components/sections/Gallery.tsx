import { useEffect, useState, useRef } from "react";

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
  const [isAnimating, setIsAnimating] = useState(false);
  const [maximizedImage, setMaximizedImage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Calculate item width based on container width and tolerance
  const getItemWidth = () => {
    if (!containerRef.current) return 0;
    const containerWidth = containerRef.current.offsetWidth;
    const gap = 16; // 4rem gap converted to pixels
    const totalGapWidth = gap * tolerance;
    return (containerWidth - totalGapWidth) / (tolerance + 1);
  };

  const handleIndexDecrement = () => {
    if (isAnimating || selectedIndex <= 0) return;
    setIsAnimating(true);
    setIndex(prevIndex => Math.max(prevIndex - 1, 0));

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleIndexIncrement = () => {
    if (isAnimating || selectedIndex >= content.length - tolerance - 1) return;
    setIsAnimating(true);
    setIndex(prevIndex => Math.min(prevIndex + 1, content.length - tolerance - 1));

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    handleShouldShowGalleryItem();
    window.addEventListener("resize", handleShouldShowGalleryItem);
    return () => {
      window.removeEventListener("resize", handleShouldShowGalleryItem);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!maximizedImage) return;

      const currentIndex = content.indexOf(maximizedImage);

      if (e.key === 'Escape') {
        setMaximizedImage(null);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setMaximizedImage(content[currentIndex - 1]);
      } else if (e.key === 'ArrowRight' && currentIndex < content.length - 1) {
        setMaximizedImage(content[currentIndex + 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Prevent scrolling when modal is open
    if (maximizedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [maximizedImage, content]);

  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="flex items-center sm:gap-4">
        <button
          onClick={handleIndexDecrement}
          disabled={isAnimating || selectedIndex <= 0}
          className={`w-12 border border-gray-500/20 aspect-square rounded-full bg-[url('/logos/arrow-left.svg')] transition-all duration-300 bg-white bg-no-repeat bg-center hover:bg-gray-100 cursor-pointer ${selectedIndex <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-label="Previous images"
        />

        <div className="relative flex-1 overflow-hidden" ref={containerRef}>
          <div
            className="flex transition-transform duration-700 ease-in-out w-full gap-4"
            style={{
              transform: `translateX(calc(-${selectedIndex} * (${getItemWidth()}px + 1.6rem)))`,
              willChange: "transform"
            }}
          >
            {content.map((item, index) => (
              <div
                className="gallery-item relative flex-shrink-0 flex flex-col items-center rounded-md overflow-clip"
                style={{ width: `${100 / (tolerance + 1)}%` }}
                key={item + index}
              >
                <div
                  style={{
                    background: `no-repeat center / cover url(${item})`,
                  }}
                  className="flex aspect-video w-full hover:scale-110 hover:brightness-75 transition-all duration-300 cursor-pointer"
                  onClick={() => setMaximizedImage(item)}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleIndexIncrement}
          disabled={isAnimating || selectedIndex >= content.length - tolerance - 1}
          className={`w-12 border border-gray-500/20 aspect-square rounded-full bg-[url('/logos/arrow-left.svg')] transition-all duration-300 bg-white bg-no-repeat bg-center hover:bg-gray-100/40 rotate-180 cursor-pointer ${selectedIndex >= content.length - tolerance - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-label="Next images"
        />
      </div>

      {/* Maximized image view */}
      {maximizedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setMaximizedImage(null)}
        >
          <div className="relative max-w-2xl max-h-full w-full">
            <button
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 z-10 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setMaximizedImage(null);
              }}
              aria-label="Close image view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <img
              src={maximizedImage}
              alt="Enlarged gallery image"
              className="w-full h-full object-contain"
            />

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
              <button
                className="bg-white/20 hover:bg-white/40 rounded-full p-2 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = content.indexOf(maximizedImage);
                  if (currentIndex > 0) {
                    setMaximizedImage(content[currentIndex - 1]);
                  }
                }}
                disabled={content.indexOf(maximizedImage) <= 0}
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                className="bg-white/20 hover:bg-white/40 rounded-full p-2 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = content.indexOf(maximizedImage);
                  if (currentIndex < content.length - 1) {
                    setMaximizedImage(content[currentIndex + 1]);
                  }
                }}
                disabled={content.indexOf(maximizedImage) >= content.length - 1}
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
