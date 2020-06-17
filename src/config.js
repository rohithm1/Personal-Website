module.exports = {
  siteTitle: 'Rohith Mandavilli | Software Engineer',
  siteDescription:
    'I am a software engineer based in Austin, TX who specializes in building exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Rohith Mandavilli, Rohith, Mandavilli, rohithm1, software engineer, back-end engineer, web developer, javascript, northeastern',
  siteUrl: 'https://rohithmandavilli.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Rohith Mandavilli',
  location: 'Austin, TX',
  email: 'rohith.mandavilli.22@Dartmouth.edu',
  github: 'https://github.com/rohithm1',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/rohithm1',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/rohith-mandavilli-b29bb2129/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rohith.mandavilli/',
    },
    {
      name: 'Twitter',
      url: 'https://www.facebook.com/profile.php?id=100007134649081',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 700,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
