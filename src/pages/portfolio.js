import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Sidebar from "../components/homeMenu/sideBar"
import { useTranslation } from 'gatsby-plugin-react-i18next'

import MainBanner from '../components/MainBanner'
import Projetos from "../components/Projects"

const PortfolioPage = () => {
    const { t } = useTranslation()

    return (
        <Layout
            form={t("global", { returnObjects: true }).form}
        >
            <Seo title="Portefólio" />
            <Sidebar
                content={t("global", { returnObjects: true }).sidebar}
                projetosPortfolio={t("portfolio", { returnObjects: true }).projetos}
                projetosVenda={t("projetosVenda", { returnObjects: true }).projetos}
            />
            <MainBanner data={t("portfolio", { returnObjects: true }).menu} />
            <Projetos
                data={t("projetos", { returnObjects: true }).cards} filters
                portfolio
            />
        </Layout>
    )
}

export default PortfolioPage

export const pageQuery = graphql`
  query($language: String!) {
    locales: allLocale(filter: {ns: {in: ["portfolio", "global", "projetosVenda", "portfolio", "projetos"]}, language: {eq: $language}}) {
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