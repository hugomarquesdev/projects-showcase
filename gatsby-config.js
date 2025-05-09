const myCustomQueries = {
  xxl: "(max-width: 1400px)",
  xl: "(max-width: 1200px)",
  l: "(max-width: 900px)",
  mobile: "(max-width: 768px)",
  s: "(max-width: 500px)",
}

module.exports = {
  siteMetadata: {
    title: `Home Simple`,
    description: `Home Simple excels in the construction, promotion, and restoration of superior quality developments situated in exceptional locations. Guided by an ambition to innovate and extend boundaries, Home Simple is committed to implementing avant-garde and eco-friendly solutions in its projects.`,
    author: `@hugomarquesdev`,
    siteUrl: `https://github.com/hugomarquesdev/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `./src/videos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Home Simple`,
        short_name: `Home Simple`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/Favicon-01.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-EXAMPLE",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    // `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           // It's important to specify the maxWidth (in pixels) of
    //           // the content container as this plugin uses this as the
    //           // base for generating different widths of each image.
    //           maxWidth: 2000,
    //           linkImagesToOriginal: false,
    //         },
    //       },
    //     ],
    //   },
    // },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-htaccess`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "999999999999999",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-999999999-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "astounding-biscuit-9585ad.netlify.app",
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`pt`, `en`],
        defaultLanguage: `pt`,
        generateDefaultLanguagePage: true,
        siteUrl: `https://astounding-biscuit-9585ad.netlify.app/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300,400,500,600,700,800,900`,
          // 300: light | 400: regular | 500: medium | 600: semi-bold | 700: bold | 800: extra-bold | 900: black
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://astounding-biscuit-9585ad.netlify.app", // string; add your MC list endpoint here
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ],
}
