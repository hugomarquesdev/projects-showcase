const myCustomQueries = {
  xxl:'(max-width: 1400px)',
  xl:'(max-width: 1200px)',
  l:'(max-width: 900px)',
  mobile: "(max-width: 768px)",
  s:'(max-width: 500px)'
}

module.exports = {
  siteMetadata: {
    title: `Ponto Urbano`,
    description: `A Ponto Urbano dedica-se à construção, promoção e reabilitação de empreendimentos de elevada qualidade em locais de excelência. O que move a Ponto Urbano é a força de criar, inovar e chegar mais longe na aplicação de soluções vanguardistas e sustentáveis.`,
    author: `@hugomarquesdev | Invisual Branding Solutions`,
    siteUrl: `https://www.pontourbano.pt`,
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
          name: `locale`
        }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ponto Urbano`,
        short_name: `Ponto Urbano`,
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
        id: "GTM-PX5KKZ9",
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
        pixelId: "573207670072759",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-144585811-1",
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
        cookieDomain: "pontourbano.pt",
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
            siteUrl: `https://pontourbano.pt/`,
            i18nextOptions: {
            interpolation: {
                escapeValue: false, // not needed for react as it escapes by default
            },
            keySeparator: false,
            nsSeparator: false,
          },
        },
    },
    {
        resolve: `gatsby-source-wordpress`,
        options: {
            url: `https://news.pontourbano.pt/graphql`,
        },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Montserrat\:300,400,500,600,700,800,900`
            // 300: light | 400: regular | 500: medium | 600: semi-bold | 700: bold | 800: extra-bold | 900: black
          ],
          display: 'swap'
        }
    },
    {
        resolve: "gatsby-plugin-mailchimp",
        options: {
          endpoint:
            "https://pontourbano.us4.list-manage.com/subscribe/post?u=452b46dc8d20609e89cf4d2ed&amp;id=577ebc9024", // string; add your MC list endpoint here
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
        },
    },
  ]
}
