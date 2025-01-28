import React from "react";

const CodeOfConduct = () => {
  return (
    <>
      <div>
        <div className="bg-[url('https://doplrafkvxyec.cloudfront.net/assets/img/banner_bg.jpg')] h-72 md:h-224 bg-contain bg-center bg-repeat -mt-5"></div>

        <img
          className="absolute mx-auto w-48 md:w-96 top-14 left-1/2 -translate-x-1/2"
          src="public/logos/aws.png"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="bg-white text-black py-10">
        <h2 className="text-primary mb-16">Code of Conduct</h2>
        <div className="w-[80vw] mx-auto mb-20">
          <div>
            <h3 className="my-2">Importance</h3>
            <p>
              We firmly believe in the value and importance of an environment
              where all AWS community members and event participants feel
              welcome and safe. This Code of Conduct explains what type of
              behavior we expect from AWS community members & event
              participants. The terms of this Code of Conduct are
              non-negotiable. We will not tolerate behavior that runs counter to
              this Code of Conduct.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="my-2">Behaviour</h3>
            <ul className="list-circle">
              <li>
                You will behave in a way as to create a safe and supportive
                environment for all event participants.
              </li>
              <li>
                You will not engage in disruptive speech or behavior or
                otherwise interfere with the event or other individuals’
                participation in the event.
              </li>
              <li>
                You will not engage in any form of harassing, offensive,
                discriminatory, or threatening speech or behavior, including
                (but not limited to) relating to race, gender, gender identity
                and expression, national origin, religion, disability, marital
                status, age, sexual orientation, military or veteran status, or
                other protected category.
              </li>
              <li>
                You will comply with the instructions of event and venue staff.{" "}
              </li>
              <li>You will comply with all applicable laws.</li>
            </ul>
          </div>

          <div className="mt-5">
            <h3 className="my-2">Scope</h3>
            <p>
              We expect all event participants (including AWS employees,
              attendees, vendors, sponsors, speakers, volunteers, and guests) to
              uphold the principles of this Code of Conduct. This Code of
              Conduct covers the main event and all related events (social or
              otherwise).
            </p>
          </div>

          <div className="mt-5">
            <h3 className="my-2">Consequences</h3>
            <p>
              If we believe that you are not complying with this Code of
              Conduct, we may deny you entry or require you to leave all event
              venue(s). All determinations are at our sole discretion. We will
              involve local law enforcement if we deem appropriate. If we deny
              you entry or require you to leave, you will not be eligible to
              receive a refund of any fees paid to us related to the event or
              related events. Breaches of this Code of Conduct may result in
              disqualification from participating in future events.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="my-2">Contact</h3>
            <p>
              If you witness or are subjected to inappropriate behavior, or have
              concerns related to this Code of Conduct, please promptly contact
              at{" "}
              <a className="text-blue" href="mailto:support@awsugddn.in">
                support@awsugddn.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeOfConduct;
