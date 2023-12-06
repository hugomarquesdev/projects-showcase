import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { useTranslation } from 'gatsby-plugin-react-i18next'

const ErrorPage = () => {
    const { t } = useTranslation()
    
    return(
        <Layout 
            fourOhFour 
            form={t("global", { returnObjects: true }).form}
        >
            <div style={{height: "calc(100vh - 8.6rem", background: "#1D252C"}}>
                <Seo title="404" />
            </div>
        </Layout>
    )
}

export default ErrorPage

export const pageQuery = graphql`
  query($language: String!) {
    locales: allLocale(filter: {ns: {in: ["global"]}, language: {eq: $language}}) {
        edges {
          node {
            ns
            data
            language
          }
        }
    }
  }
`