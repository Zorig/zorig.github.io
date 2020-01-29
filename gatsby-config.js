module.exports = {
  siteMetadata: {
    title: `Zorig`,
    description: `Python, JavaScript developer.`,
    author: `@rizogg`,
    siteUrl: "https://zorig.github.io",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zorig`,
        short_name: `developer`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#00E5FF`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-styled-jsx`,
      optimizedForSpeed: true,
      sourceMaps: false,
      vendorPrefixes: true,
    },
    {
      resolve: "gatsby-plugin-intl",
      options: {
        path: `${__dirname}/src/locales`,
        languages: ["en", "mn"],
        defaultLanguage: "en",
        redirect: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-39977485-7",
      },
    },
    "gatsby-plugin-sitemap",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
