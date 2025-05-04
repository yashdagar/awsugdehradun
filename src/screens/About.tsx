import { useEffect, useRef, useState, FC, RefObject } from "react";
import LinkIcon from "../components/icons/link";

// Type definitions
interface ItemRefs {
  heading1: RefObject<HTMLHeadingElement>,
  para1: RefObject<HTMLParagraphElement>,
  para2: RefObject<HTMLParagraphElement>,
  heading2: RefObject<HTMLHeadingElement>,
  para3: RefObject<HTMLParagraphElement>,
  para4: RefObject<HTMLParagraphElement>,
  para5: RefObject<HTMLParagraphElement>,
  para6: RefObject<HTMLParagraphElement>,
  heading3: RefObject<HTMLHeadingElement>,
  listItems: RefObject<HTMLDivElement>
}

interface VisibilityState {
  [key: string]: boolean;
}

const About: FC = () => {
  // Create refs for sections we want to animate
  const sectionRef = useRef<HTMLElement>(null);

  // Define typed refs for all animated elements
  const itemRefs: ItemRefs = {
    heading1: useRef<HTMLHeadingElement>(null),
    para1: useRef<HTMLParagraphElement>(null),
    para2: useRef<HTMLParagraphElement>(null),
    heading2: useRef<HTMLHeadingElement>(null),
    para3: useRef<HTMLParagraphElement>(null),
    para4: useRef<HTMLParagraphElement>(null),
    para5: useRef<HTMLParagraphElement>(null),
    para6: useRef<HTMLParagraphElement>(null),
    heading3: useRef<HTMLHeadingElement>(null),
    listItems: useRef<HTMLDivElement>(null)
  };

  // State to track if items are visible
  const [isVisible, setIsVisible] = useState<VisibilityState>({});

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null, // use viewport as root
      rootMargin: '0px',
      threshold: 0.1 // trigger when 10% of element is visible
    };

    // Create observers for each element
    const observers: IntersectionObserver[] = [];

    // Function to handle when an element becomes visible
    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
      entries.forEach(entry => {
        if (entry.isIntersecting && (entry.target as HTMLElement).dataset.ref) {
          setIsVisible(prev => ({ ...prev, [(entry.target as HTMLElement).dataset.ref ?? ""]: true }));
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    };

    // Create an observer and observe each element
    Object.entries(itemRefs).forEach(([key, ref]) => {
      if (ref.current) {
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
        ref.current.dataset.ref = key;
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    // Cleanup
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Animation classes based on visibility
  const getAnimationClass = (refKey: string): string => {
    if (isVisible[refKey]) {
      return "opacity-100 translate-y-0 transition-all duration-700";
    }
    return "opacity-0 translate-y-8 transition-all duration-700";
  };

  return (
    <section className="!mb-8 about" ref={sectionRef as RefObject<HTMLElement>}>
      <div className="flex flex-col gap-y-8 z-10">
        <h2
          ref={itemRefs.heading1}
          className={`${getAnimationClass('heading1')} mb-8`}
        >
          About The Event
        </h2>

        <p
          ref={itemRefs.para1}
          className={`${getAnimationClass('para1')} !text-gray-900 !font-normal`}
        >
          AWS User Group Dehradun (AWSUGDDN) is thrilled to present its flagship annual event — AWS Community Day Dehradun 2025 — a grand celebration of cloud innovation, collaboration, and community.
        </p>

        <p
          ref={itemRefs.para2}
          className={`${getAnimationClass('para2')} !text-gray-900 !font-normal`}
        >
          With a rich mix of technical deep-dives, real-world use cases, and inspiring success stories, this event is designed to bring together AWS enthusiasts, developers, architects, founders, students, and decision-makers under one roof to learn, network, and grow.
        </p>

        <br />

        <h3
          ref={itemRefs.heading2}
          className={`font-semibold ${getAnimationClass('heading2')}`}
        >
          AWS USER GROUP DEHRADUN
        </h3>

        <p
          ref={itemRefs.para3}
          className={`${getAnimationClass('para3')} !font-normal`}
        >
          AWSUG Dehradun is a passionate community of cloud professionals, developers, students, and innovators who are united by a shared love for building and sharing with Amazon Web Services.
        </p>

        <p
          ref={itemRefs.para4}
          className={`${getAnimationClass('para4')} !font-normal`}
        >
          Our group is committed to delivering community-led learning experiences, diving deep into modern tech stacks, including AWS cloud architecture, DevOps, AI/ML, Data Analytics, IoT, Serverless Computing, Generative AI, and more.
        </p>

        <p
          ref={itemRefs.para5}
          className={`${getAnimationClass('para5')} !font-normal`}
        >
          AWS Community Days are globally recognized, community-organized events that empower local talent and connect them with top-tier minds in tech. We bring together educational sessions, hands-on demos, and networking opportunities — all powered by the community, for the community.
        </p>

        <p
          ref={itemRefs.para6}
          className={`${getAnimationClass('para6')} !font-normal`}
        >
          Whether you're an early learner or a seasoned cloud architect, this event is your launchpad to new ideas, partnerships, and innovations.
        </p>

        <br />

        <h3
          ref={itemRefs.heading3}
          className={`${getAnimationClass('heading3')} font-semibold`}
        >
          WHAT TO EXPECT
        </h3>

        <div
          ref={itemRefs.listItems}
          className={`${getAnimationClass('listItems')} ml-4`}
        >
          <ul>
            <li className="transition-all duration-700 delay-100">
              Energize & elevate your passion for tech with sessions that spark ideas and drive real impact.
            </li>
            <li className="transition-all duration-700 delay-200">
              Learn latest industry trends, use cases, and innovations from expert AWS professionals and community leaders.
            </li>
            <li className="transition-all duration-700 delay-300">
              Connect and network with 400+ AWS users, builders, developers, DevOps engineers, and solution architects.
            </li>
            <li className="transition-all duration-700 delay-400">
              Gain hands-on insights and experiences you can apply back at your organization or startup.
            </li>
            <li className="transition-all duration-700 delay-500">
              Meet AWS heroes, community leaders, and builders from across India.
            </li>
            <li className="transition-all duration-700 delay-600">
              Students can explore career paths, mentorship, and opportunities in cloud & emerging technologies.
            </li>
            <li className="transition-all duration-700 delay-700">
              Companies and startups can showcase their work, gain visibility, and attract top tech talent.
            </li>
            <li className="transition-all duration-700 delay-800">
              Participate in fun activities and stand a chance to win exclusive AWS goodies.
            </li>
          </ul>
        </div>

        <br />
        {/* <a href="/code-of-conduct" aria-label="See code of conduct" className="link">
          Code Of Conduct
          <LinkIcon />
        </a> */}
      </div>
    </section>
  );
};

export default About;
