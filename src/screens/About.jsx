import LinkIcon from "../components/icons/link";

const About = () => {
  return (
    <section className="about">
      <div className="flex flex-col gap-y-8 z-10 mb-36">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-primary animate__slideInLeft">
            About AWS User Group Dehradun
          </h3>
          <p>
            AWS User Group Dehradun is a community of cloud enthusiasts focused
            on bringing together AWS partners, customers, practitioners,
            experts, and students to share ideas and knowledge. We aim to build
            an environment connecting people through innovation, ideas, and
            inspiration. It gives me immense pride to bring to your attention
            that we are one of India's youngest and fastest-growing communities.{" "}
            <br />
            <br />
            AWS Community Day event is a community-led conference where event
            logistics and content is planned, sourced, and delivered by
            community leaders. It feature technical discussions, workshops,
            and hands-on labs led by expert AWS users and industry leaders.
            Community Day delivers a peer-to-peer learning experience,
            providing developers with a venue for them to acquire AWS knowledge.
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <h3 className="text-primary">What can you expect</h3>
          <ul className="list-circle">
            <li>
              Renew, revive & revitalize to exemplify your excitement about the
              work you do
            </li>
            <li>
              Learn industry trends and intricacies about innovative
              implementations from AWS experts
            </li>
            <li>
              Harness the power of networking with AWS users, DevOps, developers
              & solutions architects
            </li>
            <li>Network with fellow AWS veterans & techies during breaks</li>
            <li>
              Novice to pioneer on relentless pursuit to learn can rejoice the
              AWS offerings & success stories under one roof.
            </li>
            <li>Take helpful and valuable information back to business</li>
            <li>
              Gain visibility to get more publicity for your esteemed
              organisation
            </li>
            <li>
              Sporting chance for active participants to win AWS credits,
              goodies and avail various certification vouchers
            </li>
          </ul>
        </div>
        <a href="/code-of-conduct" className="link">
          Code Of Conduct
          <LinkIcon />
          {/* <img src="logos/arrow-up-right.svg" loading="lazy" /> */}
        </a>
      </div>
    </section>
  );
};

export default About;
