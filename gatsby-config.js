module.exports = {
  siteMetadata: {
    title: 'Carms Ng | Full Stack Developer',
    description: 'I’m passionate about building impactful applications to improve lives around me. I’m a versatile Full Stack RoR Developer. I’m climate and social justice-minded, communicative, fun, curious, adaptive and always up for a new challenge.',
    author: '@Carms-dev',
    siteUrl: 'https://www.carms-ng.com/',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pdfs',
        path: `${__dirname}/src/assets/pdfs/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-gatsby-cloud',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
