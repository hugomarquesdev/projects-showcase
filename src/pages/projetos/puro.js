import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Sidebar from "../../components/homeMenu/sideBar"
import ProjectsBanner from "../../components/ProjectsBanner"
import ProjectsVideo from "../../components/ProjectsVideo"
import ProjectsImage from "../../components/ProjectsImage"
import ProjectsInfo from "../../components/ProjectsInfo"
import ProjectsFeatures from "../../components/ProjectsFeatures"
import ProjectsMap from "../../components/ProjectsMap"
import Form from "../../components/FormCasa"

// Video asset
import video from "../../videos/video-example.mp4"
import poster from "../../images/video-posters/poster.jpg"

const PuroPage = () => {
  const { t } = useTranslation()

  return (
    <Layout form={t("global", { returnObjects: true }).form} hideForm>
      <Seo title="Puro" />
      <Sidebar
        content={t("global", { returnObjects: true }).sidebar}
        projetosPortfolio={t("portfolio", { returnObjects: true }).projetos}
        projetosVenda={t("projetosVenda", { returnObjects: true }).projetos}
      />
      <ProjectsBanner
        data={t("projetos", { returnObjects: true }).projects.puro.menu}
      />
      <ProjectsVideo data={video} poster={poster} />
      <ProjectsImage
        data={t("projetos", { returnObjects: true }).projects.puro.image}
        shadow
      />
      <ProjectsInfo
        data={t("projetos", { returnObjects: true }).projects.puro.info}
      />
      <ProjectsFeatures
        data={
          t("projetos", { returnObjects: true }).projects.puro.info.features
        }
      />
      <ProjectsFeatures
        data={
          t("projetos", { returnObjects: true }).projects.puro.info.features2
        }
      />
      <ProjectsMap
        data={t("projetos", { returnObjects: true }).projects.puro.map}
      />
      <Form data={t("global", { returnObjects: true }).form} white />
    </Layout>
  )
}

export default PuroPage

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
