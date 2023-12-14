import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Sidebar from "../../components/homeMenu/sideBar"
import ProjectsBanner from "../../components/ProjectsBanner"
import ProjectsImage from "../../components/ProjectsImage"
import ProjectsInfo from "../../components/ProjectsInfo"
import ProjectsFeatures from "../../components/ProjectsFeatures"
import ProjectsMap from "../../components/ProjectsMap"
import Form from "../../components/FormCasa"

const NeonPage = () => {
  const { t } = useTranslation()

  return (
    <Layout form={t("global", { returnObjects: true }).form} hideForm>
      <Seo title="Shining" />
      <Sidebar
        content={t("global", { returnObjects: true }).sidebar}
        projetosPortfolio={t("portfolio", { returnObjects: true }).projetos}
        projetosVenda={t("projetosVenda", { returnObjects: true }).projetos}
      />
      <ProjectsBanner
        data={t("projetos", { returnObjects: true }).projects.neon.menu}
      />
      <ProjectsImage
        data={t("projetos", { returnObjects: true }).projects.neon.image}
        shadow
      />
      <ProjectsImage
        data={t("projetos", { returnObjects: true }).projects.neon.image2}
      />
      <ProjectsInfo
        data={t("projetos", { returnObjects: true }).projects.neon.info}
      />
      <ProjectsFeatures
        data={
          t("projetos", { returnObjects: true }).projects.neon.info.features
        }
      />
      <ProjectsMap
        data={t("projetos", { returnObjects: true }).projects.neon.map}
      />
      <Form data={t("global", { returnObjects: true }).form} white />
    </Layout>
  )
}

export default NeonPage

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
