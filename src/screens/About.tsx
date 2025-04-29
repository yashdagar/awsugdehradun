import LinkIcon from "../components/icons/link";

const About = () => {
  return (
    <section className="about">
      <div className="flex flex-col gap-y-8 z-10 mb-36">
        <h2>About The Event</h2>
        <p>
        AWS User Group Dehradun (AWSUGDDN) is thrilled to present its flagship annual event — AWS Community Day Dehradun 2025 — a grand celebration of cloud innovation, collaboration, and community.
        </p>
        <p>
        With a rich mix of technical deep-dives, real-world use cases, and inspiring success stories, this event is designed to bring together AWS enthusiasts, developers, architects, founders, students, and decision-makers under one roof to learn, network, and grow.
        </p><br />
        <h3 className="font-semibold">AWS USER GROUP DEHRADUN</h3>
        <p>
        AWSUG Dehradun is a passionate community of cloud professionals, developers, students, and innovators who are united by a shared love for building and sharing with Amazon Web Services.
        </p>
        <p>
        Our group is committed to delivering community-led learning experiences, diving deep into modern tech stacks, including AWS cloud architecture, DevOps, AI/ML, Data Analytics, IoT, Serverless Computing, Generative AI, and more.
        </p>
        <p>
        AWS Community Days are globally recognized, community-organized events that empower local talent and connect them with top-tier minds in tech. We bring together educational sessions, hands-on demos, and networking opportunities — all powered by the community, for the community.
        </p>
        <p>
        Whether you're an early learner or a seasoned cloud architect, this event is your launchpad to new ideas, partnerships, and innovations.
        </p><br />
        <h2>WHAT TO EXPECT</h2>
        <p>
        Energize & elevate your passion for tech with sessions that spark ideas and drive real impact.
        </p>
        <p>
        <b>Learn</b>latest industry trends, use cases, and innovations from expert AWS professionals and community leaders.
        </p>
        <p>
        <b>Connect</b> and network with 400+ AWS users, builders, developers, DevOps engineers, and solution architects.
        </p>
        <p>
        Gain hands-on insights and experiences you can apply back at your organization or startup.
        </p>
        <p>
        Meet AWS heroes, community leaders, and builders from across India.
        </p>
        <p>
        Students can explore career paths, mentorship, and opportunities in cloud & emerging technologies.
        </p>
        <p>
        Companies and startups can showcase their work, gain visibility, and attract top tech talent.
        </p>
        <p>
        Participate in fun activities and stand a chance to win exclusive AWS goodies.
        </p><br />
        <h3 className="font-semibold">EVENT DETAILS</h3>
        <p><b>Venue:</b> Dehradun</p>
        <p><b>Date:</b> Will be declared soon</p> {/* TODO: EDIT AFTER REVEAL */}
        <p><b>Time:</b> 9:00 AM – 6:00 PM IST</p>
        <a href="/code-of-conduct" className="link">
          Code Of Conduct
          <LinkIcon />
        </a>
      </div>
    </section>
  );
};

export default About;
