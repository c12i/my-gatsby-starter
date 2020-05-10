const siteMetadata = {
  title: `Hello World`,
  description: `This is my basic starter!`,
  author: `Collins Muriuki`,
};

const plugins = [
  `gatsby-plugin-sass`,
  `gatsby-plugin-styled-components`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-transition-link`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
];

module.exports = {
  siteMetadata,
  plugins,
};
