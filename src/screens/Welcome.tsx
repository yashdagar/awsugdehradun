import React from 'react';

const WelcomeEmail: React.FC = () => {
  const styles = {
    container: {
      maxWidth: '672px',
      margin: '0 auto',
      backgroundColor: 'white',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    },
    header: {
      backgroundColor: 'white',
      padding: '24px',
      borderBottom: '1px solid #e5e7eb',
      textAlign: 'center' as const,
    },
    headerImg: {
      height: '128px',
      margin: '0 auto',
    },
    mainContent: {
      padding: '32px',
      color: '#1f2937',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '24px',
      textAlign: 'center' as const,
      color: '#1f2937',
    },
    section: {
      marginBottom: '24px',
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '16px',
    },
    paragraph: {
      marginBottom: '16px',
      lineHeight: '1.6',
    },
    signature: {
      marginTop: '32px',
      marginBottom: '16px',
    },
    signatureName: {
      fontWeight: '600',
      color: '#1f2937',
    },
    codeOfConduct: {
      marginBottom: '24px',
      fontSize: '14px',
    },
    codeOfConductLink: {
      color: '#3b82f6',
      textDecoration: 'none',
      fontWeight: '500',
    },
    footer: {
      position: 'relative' as const,
      minHeight: '240px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: "url('https://awsugddn.in/logos/footer_bg.svg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    footerContent: {
      textAlign: 'center' as const,
      padding: '32px',
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
    },
    socialLink: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      textDecoration: 'none',
      transition: 'transform 0.3s ease',
    },
    socialLinkImg: {
      width: '32px',
      height: '32px',
      marginBottom: '4px',
    },
    socialLinkSpan: {
      color: 'black',
      fontSize: '12px',
      fontWeight: '500',
    },
    bottomBanner: {
      backgroundColor: '#f97316',
      color: 'white',
      textAlign: 'center' as const,
      padding: '12px',
    },
    bottomBannerP: {
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header with Logo */}
      <div style={styles.header}>
        <img 
          src="https://awsugddn.in/logos/logo.webp" 
          alt="AWS User Group Dehradun" 
          style={styles.headerImg}
        />
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <h1 style={styles.title}>Welcome to AWS User Group Dehradun!</h1>
        
        <div style={styles.section}>
          <p style={styles.paragraph}>
            We're thrilled to have you as part of our growing community of cloud professionals, developers, students, and tech enthusiasts who share a common passion for building, innovating, and learning with Amazon Web Services.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>About Us</h2>
          <p style={styles.paragraph}>
            AWS User Group Dehradun is a passionate community of cloud professionals, developers, students, and innovators who are united by a shared love for building and sharing with Amazon Web Services.
          </p>
          
          <p style={styles.paragraph}>
            Our group is committed to delivering community-led learning experiences, diving deep into modern tech stacks, including AWS cloud architecture, DevOps, AI/ML, Data Analytics, IoT, Serverless Computing, Generative AI, and more.
          </p>
        </div>

        <div style={styles.section}>
          <p style={styles.paragraph}>
            <strong>AWS Community Days</strong> are globally recognized, community-organized events that empower local talent and connect them with top-tier minds in tech. We bring together educational sessions, hands-on demos, and networking opportunities — all powered by the community, for the community.
          </p>
          
          <p style={styles.paragraph}>
            Whether you're just starting out or are a seasoned cloud architect, this community is your platform for exploring new ideas, building valuable connections, and staying ahead in the world of cloud and innovation.
          </p>
          
          <p style={styles.paragraph}>
            We look forward to your active participation and contributions.
          </p>
        </div>

        <div style={styles.signature}>
          <p style={styles.paragraph}>Warm regards,</p>
          <p style={styles.signatureName}>AWS User Group Dehradun Team</p>
        </div>

        {/* Code of Conduct */}
        <div style={styles.codeOfConduct}>
          <p>
            Please review our{' '}
            <a 
              href="https://awsugddn.in/code-of-conduct/" 
              style={styles.codeOfConductLink}
            >
              Code of Conduct
            </a>{' '}
            to ensure a welcoming and inclusive environment for all community members.
          </p>
        </div>
      </div>

      {/* Footer with Social Links */}
      <div style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.socialLinks}>
            {/* Instagram */}
            <a 
              href="https://instagram.com/awsugddn" 
              style={styles.socialLink}
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" 
                alt="Instagram" 
                style={styles.socialLinkImg}
              />
              <span style={styles.socialLinkSpan}>Instagram</span>
            </a>
            
            {/* Meetup */}
            <a 
              href="https://www.meetup.com/aws-user-group-dehradun/" 
              style={styles.socialLink}
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/meetup.svg" 
                alt="Meetup" 
                style={styles.socialLinkImg}
              />
              <span style={styles.socialLinkSpan}>Meetup</span>
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/aws-user-group-dehradun/" 
              style={styles.socialLink}
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" 
                alt="LinkedIn" 
                style={styles.socialLinkImg}
              />
              <span style={styles.socialLinkSpan}>LinkedIn</span>
            </a>
            
            {/* Twitter/X */}
            <a 
              href="https://twitter.com/awsugddn" 
              style={styles.socialLink}
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" 
                alt="Twitter" 
                style={styles.socialLinkImg}
              />
              <span style={styles.socialLinkSpan}>Twitter</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div style={styles.bottomBanner}>
        <p style={styles.bottomBannerP}>@ AWS User Group Dehradun</p>
      </div>
    </div>
  );
};

export default WelcomeEmail;