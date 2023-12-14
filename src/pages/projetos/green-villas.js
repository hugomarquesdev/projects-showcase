import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Sidebar from "../../components/homeMenu/sideBar"
import ProjectsBanner from "../../components/ProjectsBanner"
import ProjectsInfo from "../../components/ProjectsInfo"
import ProjectsFeatures from "../../components/ProjectsFeatures"
import ProjectsMap from "../../components/ProjectsMap"
import Form from "../../components/FormCasa"

const GreenVillasPage = () => {
  const { t } = useTranslation()

  return (
    <Layout form={t("global", { returnObjects: true }).form} hideForm>
      <Seo title="Dunder Miflin" />
      <Sidebar
        content={t("global", { returnObjects: true }).sidebar}
        projetosPortfolio={t("portfolio", { returnObjects: true }).projetos}
        projetosVenda={t("projetosVenda", { returnObjects: true }).projetos}
      />
      <ProjectsBanner
        data={t("projetos", { returnObjects: true }).projects.greenvilla.menu}
      />
      <ProjectsInfo
        data={t("projetos", { returnObjects: true }).projects.greenvilla.info}
      />
      <ProjectsFeatures
        data={
          t("projetos", { returnObjects: true }).projects.greenvilla.info
            .features
        }
      />
      <ProjectsMap
        data={t("projetos", { returnObjects: true }).projects.greenvilla.map}
      />
      <Form data={t("global", { returnObjects: true }).form} white />
    </Layout>
  )
}

export default GreenVillasPage

export const pageQuery = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["projetos", "global", "projetosVenda", "portfolio"] }
        language: { eq: $language }
      }
    ) {
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
