const About = () => {
  return (
    <section className="relative about px-4 md:px-12 lg:px-24 py-16 flex justify-between bg-[--dark-gray] overflow-clip">
      <img
        src="logos/chapter-badge.svg"
        className="hidden md:block md:w-[150px] lg:w-[400px]"
        loading="lazy"
      />
      <div className="w-16 lg:w-24" />
      <div className="block">
        <div>
          <h2>About AWS User Group Dehradun</h2>
          <div className="h-8" />
          <p>
            AWS User Group Dehradun is a community of cloud enthusiasts focused
            on bringing together AWS partners, customers, practitioners,
            experts, and students to share ideas and knowledge. We aim to build
            an environment connecting people through innovation, ideas, and
            inspiration. It gives me immense pride to bring to your attention
            that we are one of India's youngest and fastest-growing communities.{" "}
            <br />
            <br />
            AWS Community Day events are community-led conferences where event
            logistics and content is planned, sourced, and delivered by
            community leaders. They feature technical discussions, workshops,
            and hands-on labs led by expert AWS users and industry leaders from
            around the world. Community Day events deliver a peer-to-peer
            learning experience, providing developers with a venue for them to
            acquire AWS knowledge in their preferred way: from one another.
          </p>
        </div>
        <div className="h-16" />
        <div>
          <h2>What can you expect</h2>
          <div className="h-8" />
          <ol>
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
          </ol>
        </div>
        <div className="flex mt-16">
          <a href="/code-of-conduct" className="link">
            Code Of Conduct
            <img src="logos/arrow-up-right.svg" loading="lazy" />
          </a>
        </div>
      </div>
      <div className="blur1" />
    </section>
  );
};

export default About;
