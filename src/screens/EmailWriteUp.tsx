import React from 'react';

const EmailWriteUp: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg font-sans">
      {/* Header with Logo */}
      <div className="bg-white py-6 px-8 border-b border-gray-200 text-center flex justify-center">
        <img 
          src="https://awsugddn.in/logos/logo.webp" 
          alt="AWS User Group Dehradun" 
          className="h-32"
        />
      </div>

      {/* Main Content */}
      <div className="py-8 px-8 text-gray-900">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">
          [Title Style]
        </h1>
        
        <div className="mb-6">
          <p className="mb-4 leading-relaxed">
            [Content Style]
          </p>
          <h2 className="text-lg font-semibold justify-start! text-gray-900 mx-0! mb-0!">
            [Sub Heading Style]
          </h2>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 justify-start! mx-0! mb-0!">
            About AWS User Group Dehradun
          </h2>
          <p className="mb-4 leading-relaxed">
            AWS User Group Dehradun is a passionate community of cloud professionals, developers, students, and innovators who are united by a shared love for building and sharing with Amazon Web Services.
          </p>
          
          <p className="mb-4 leading-relaxed">
            Our group is committed to delivering community-led learning experiences, diving deep into modern tech stacks, including AWS cloud architecture, DevOps, AI/ML, Data Analytics, IoT, Serverless Computing, Generative AI, and more.
          </p>
        </div>

        <div className="mb-6">
          <p className="mb-4 leading-relaxed">
            <strong className='contents'>AWS Community Days</strong> are globally recognized, community-organized events that empower local talent and connect them with top-tier minds in tech. We bring together educational sessions, hands-on demos, and networking opportunities — all powered by the community, for the community.
          </p>
          
          <p className="mb-4 leading-relaxed">
            Whether you're just starting out or are a seasoned cloud architect, this community is your platform for exploring new ideas, building valuable connections, and staying ahead in the world of cloud and innovation.
          </p>
          
          <p className="mb-4 leading-relaxed">
            We look forward to your active participation and contributions.
          </p>
        </div>

        <div className="mb-8">
          <p className="mb-4 leading-relaxed">Warm regards,</p>
          <p className="font-semibold text-gray-900">AWS User Group Dehradun Team</p>
        </div>

        {/* Code of Conduct */}
        <div className="mb-6 text-sm flex">
          <p>
            Please review our{' '}
            <a 
              href="https://awsugddn.in/code-of-conduct/" 
              className="text-primary contents font-medium hover:underline"
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
        <div className="text-center p-6">
          <div className="flex justify-center space-x-6">
            {/* Instagram */}
            <a 
              href="https://instagram.com/awsugddn" 
              className="group flex flex-col items-center transition-transform"
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" 
                alt="Instagram" 
                className="w-8 h-8 mb-1 group-hover:scale-110 transition-transform"
              />
              <span className="text-black text-xs font-medium">Instagram</span>
            </a>
            
            {/* Meetup */}
            <a 
              href="https://www.meetup.com/aws-user-group-dehradun/" 
              className="group flex flex-col items-center transition-transform"
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/meetup.svg" 
                alt="Meetup" 
                className="w-8 h-8 mb-1 group-hover:scale-110 transition-transform"
              />
              <span className="text-black text-xs font-medium">Meetup</span>
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/aws-user-group-dehradun/" 
              className="group flex flex-col items-center transition-transform"
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" 
                alt="LinkedIn" 
                className="w-8 h-8 mb-1 group-hover:scale-110 transition-transform"
              />
              <span className="text-black text-xs font-medium">LinkedIn</span>
            </a>
            
            {/* Twitter/X */}
            <a 
              href="https://twitter.com/awsugddn" 
              className="group flex flex-col items-center transition-transform"
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" 
                alt="Twitter" 
                className="w-8 h-8 mb-1 group-hover:scale-110 transition-transform"
              />
              <span className="text-black text-xs font-medium">Twitter</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-aws-orange text-white text-center py-3">
        <p className="font-medium">@ AWS User Group Dehradun</p>
      </div>
    </div>
  );
};

export default EmailWriteUp;