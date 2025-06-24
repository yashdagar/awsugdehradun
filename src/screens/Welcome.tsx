import React from 'react';

const WelcomeEmail: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-2xl">
      {/* Header with Logo */}
      <div className="bg-white p-6 md:px-8 border-b border-gray-200 text-center">
        <img 
          src="https://awsugddn.in/logos/logo.webp" 
          alt="AWS User Group Dehradun" 
          className="h-32 mx-auto"
        />
      </div>

      {/* Main Content */}
      <div className="p-8 text-gray-800">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Welcome to AWS User Group Dehradun!
        </h1>
        
        <div className="mb-6">
          <p className="mb-4 leading-relaxed">
            We're thrilled to have you as part of our growing community of cloud professionals, developers, students, and tech enthusiasts who share a common passion for building, innovating, and learning with Amazon Web Services.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mx-0! justify-start! mb-0!">
            About Us
          </h2>
          <p className="mb-4 leading-relaxed *:contents">
            AWS User Group Dehradun is a passionate community of cloud professionals, developers, students, and innovators who are united by a shared love for building and sharing with Amazon Web Services.
          </p>
          
          <p className="mb-4 leading-relaxed *:contents">
            Our group is committed to delivering community-led learning experiences, diving deep into modern tech stacks, including AWS cloud architecture, DevOps, AI/ML, Data Analytics, IoT, Serverless Computing, Generative AI, and more.
          </p>
        </div>

        <div className="mb-6">
          <p className="mb-4 leading-relaxed *:contents">
            <strong>AWS Community Days</strong> are globally recognized, community-organized events that empower local talent and connect them with top-tier minds in tech. We bring together educational sessions, hands-on demos, and networking opportunities — all powered by the community, for the community.
          </p>
          
          <p className="mb-4 leading-relaxed *:contents">
            Whether you're just starting out or are a seasoned cloud architect, this community is your platform for exploring new ideas, building valuable connections, and staying ahead in the world of cloud and innovation.
          </p>
          
          <p className="mb-4 leading-relaxed *:contents">
            We look forward to your active participation and contributions.
          </p>
        </div>

        <div className="mt-8 mb-4">
          <p className="mb-4 leading-relaxed">Warm regards,</p>
          <p className="font-semibold text-gray-800">AWS User Group Dehradun Team</p>
        </div>

        {/* Code of Conduct */}
        <div className="mb-6 text-sm">
          <p className=' *:contents'>
            Please review our{' '}
            <a 
              href="https://awsugddn.in/code-of-conduct/" 
              className="text-primary hover:underline font-medium"
            >
              Code of Conduct
            </a>{' '}
            to ensure a welcoming and inclusive environment for all community members.
          </p>
        </div>
      </div>

      {/* Footer with Social Links */}
      <div 
        className="relative min-h-[15rem] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://awsugddn.in/logos/footer_bg.svg')"
        }}
      >
        <div className="text-center p-8">
          <div className="flex justify-center gap-6 md:gap-6">
            {/* Instagram */}
            <a 
              href="https://instagram.com/awsugddn" 
              className="flex flex-col items-center no-underline transition-transform hover:scale-110"
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" 
                alt="Instagram" 
                className="w-8 h-8 md:w-8 md:h-8 mb-1"
              />
              <span className="text-black text-xs font-medium">Instagram</span>
            </a>
            
            {/* Meetup */}
            <a 
              href="https://www.meetup.com/aws-user-group-dehradun/" 
              className="flex flex-col items-center no-underline transition-transform hover:scale-110"
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/meetup.svg" 
                alt="Meetup" 
                className="w-8 h-8 md:w-8 md:h-8 mb-1"
              />
              <span className="text-black text-xs font-medium">Meetup</span>
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/aws-user-group-dehradun/" 
              className="flex flex-col items-center no-underline transition-transform hover:scale-110"
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" 
                alt="LinkedIn" 
                className="w-8 h-8 md:w-8 md:h-8 mb-1"
              />
              <span className="text-black text-xs font-medium">LinkedIn</span>
            </a>
            
            {/* Twitter/X */}
            <a 
              href="https://twitter.com/awsugddn" 
              className="flex flex-col items-center no-underline transition-transform hover:scale-110"
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" 
                alt="Twitter" 
                className="w-8 h-8 md:w-8 md:h-8 mb-1"
              />
              <span className="text-black text-xs font-medium">Twitter</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-orange-500 text-white text-center p-3">
        <p className="font-medium">@ AWS User Group Dehradun</p>
      </div>
    </div>
  );
};

export default WelcomeEmail;