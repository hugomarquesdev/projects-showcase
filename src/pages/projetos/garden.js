import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import { useTranslation } from 'gatsby-plugin-react-i18next'

import Sidebar from "../../components/homeMenu/sideBar"
import ProjectsBanner from '../../components/ProjectsBanner'
import ProjectsVideo from '../../components/ProjectsVideo'
import ProjectsImage from '../../components/ProjectsImage'
import ProjectsInfo from '../../components/ProjectsInfo'
import ProjectsFeatures from '../../components/ProjectsFeatures'
import ProjectsMap from '../../components/ProjectsMap'
import Form from "../../components/FormCasa"

// Video asset
import video from "../../videos/GARDENpeq.mp4"
import poster from "../../images/video-posters/gardenPoster.jpg"

const GardenPage = () => {
    const { t } = useTranslation()

    return(
      <Layout 
          form={t("global", { returnObjects: true }).form}
          hideForm
      >
          <Seo title="Garden" />
          <Sidebar 
              content={t("global", { returnObjects: true }).sidebar}
              projetosPortfolio={t("portfolio", { returnObjects: true }).projetos}
              projetosVenda={t("projetosVenda", { returnObjects: true }).projetos}
          />
          <ProjectsBanner data={t("projetos", { returnObjects: true }).projects.garden.menu} />
          <ProjectsVideo 
              data={video} 
              poster={poster} 
          />
          <ProjectsImage 
              data={t("projetos", { returnObjects: true }).projects.garden.image}
              shadow
          />
          <ProjectsInfo
              data={t("projetos", { returnObjects: true }).projects.garden.info}
          />
          <ProjectsFeatures
              data={t("projetos", { returnObjects: true }).projects.garden.info.features}
          />
          <ProjectsFeatures
              data={t("projetos", { returnObjects: true }).projects.garden.info.features2}
          />
          <ProjectsMap
              data={t("projetos", { returnObjects: true }).projects.garden.map}
          />
          <Form 
              data={t("global", { returnObjects: true }).form} 
              white
          />
      </Layout>
    )
}

export default GardenPage

export const pageQuery = graphql`
  query($language: String!) {
    locales: allLocale(filter: {ns: {in: ["projetos", "global", "projetosVenda", "portfolio"]}, language: {eq: $language}}) {
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