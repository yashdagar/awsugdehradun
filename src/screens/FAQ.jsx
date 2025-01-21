import { useState } from "react";

const FAQ = () => {
  const questions = [
    {
      question: "What is AWS Community Day Dehradun?",
      answer:
        "AWS Community Day Dehradun is a community-led event organized by AWS User Group Dehradun. It brings together cloud enthusiasts, industry experts, and developers to share knowledge, discuss innovative solutions, and network with peers.",
    },
    {
      question: "When and where will AWS Community Day 2025 be held?",
      answer:
        "AWS Community Day 2025 is scheduled to take place on 23 March 2025, at [insert venue], Dehradun. Stay tuned for updates on the official website or social media channels.",
    },
    {
      question: "Who can attend AWS Community Day 2025?",
      answer:
        "The event is open to anyone interested in AWS and cloud computing, including developers, students, IT professionals, and business leaders.",
    },
    {
      question: "How can I register for AWS Community Day 2025?",
      answer:
        "You can register for the event through the official AWS User Group Dehradun website: awsugddn.in. Keep an eye out for early bird registrations and special offers.",
    },
    {
      question: "What can I expect from the event?",
      answer:
        "Keynote Sessions: Insights from AWS experts and community leaders.\nWorkshops: Hands-on sessions on AWS technologies.\nNetworking Opportunities: Meet industry peers and AWS professionals.\nGoodies and Prizes: Exciting giveaways for attendees and participants.",
    },
    {
      question: "Is there a participation fee for the event?",
      answer: "AWS Community Day Dehradun 2025 is paid.",
    },
    {
      question: "Will there be a certificate for attendees?",
      answer:
        "Yes, attendees will receive a certificate of participation after the event.",
    },
    {
      question: "How can I present a session or sponsor the event?",
      answer:
        "If you wish to present a session or sponsor the event, please contact us at awsugdehradun@gmail.in",
    },
    {
      question: "How can I stay updated about the event?",
      answer:
        "Follow us on social media or check our website regularly for the latest updates.",
    },
  ];

  const [isOpen, setIsOpen] = useState(
    Array.from({ length: questions.length }, () => false),
  );

  const toggleIsOpen = (index) => {
    var items = [...isOpen];
    items[index] = !items[index];
    setIsOpen(items);
  };

  const half = Math.floor(questions.length / 2) + (questions.length % 2);

  return (
    <section className="faq">
      <h2 className="mb-4">Frequently Asked Questions</h2>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 mt-8">
        <div>
          {questions.slice(0, half).map((item, index) => {
            return (
              <div
                key={index}
                className="flex-[50%] flex-grow-0 flex-shrink-0 mt-8"
              >
                <div
                  className={`flex place-items-center transition-all duration-300 ${isOpen[index] ? "" : "mb-4"}`}
                >
                  <h4 className="flex text-gray-50 font-medium mr-4 mb-4 w-full text-base sm:text-lg md:text-xl">
                    {item["question"]}
                  </h4>
                  <div
                    style={{
                      background:
                        "no-repeat center / 1rem url(logos/chevron-down.svg), #fff8",
                    }}
                    className={`aspect-square bg-[#fff8] rounded-full w-6 transition-all duration-300 ${isOpen[index] ? "rotate-180" : ""}`}
                    onClick={() => toggleIsOpen(index)}
                  />
                </div>
                <p
                  className={`${isOpen[index] ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-300`}
                >
                  {item["answer"]}
                </p>
                <div className="border-b-[1px] border-b-[#0004]" />
              </div>
            );
          })}
        </div>
        <div>
          {questions.slice(half, questions.length).map((item, index) => {
            return (
              <div
                key={index}
                className="mb-8 flex-[50%] flex-grow-0 flex-shrink-0 mt-8"
              >
                <div
                  className={`flex place-items-center transition-all duration-300 ${isOpen[index + half] ? "" : "mb-4"}`}
                >
                  <h4 className="flex text-gray-50 font-medium mr-4 mb-4 w-full text-base sm:text-lg md:text-xl">
                    {item["question"]}
                  </h4>
                  <div
                    style={{
                      background:
                        "no-repeat center / 1rem url(logos/chevron-down.svg), #fff8",
                    }}
                    className={`aspect-square bg-[#fff8] rounded-full w-6 transition-all duration-300 ${isOpen[index + half] ? "rotate-180" : ""}`}
                    onClick={() => toggleIsOpen(index + half)}
                  />
                </div>
                <p
                  className={`${isOpen[index + half] ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0"} transition-all duration-300 overflow-hidden border-b-[1px] border-b-[#0004]`}
                >
                  {item["answer"]}
                </p>
                <div className="border-b-[1px] border-b-[#0004]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
