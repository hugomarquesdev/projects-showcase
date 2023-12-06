import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Sidebar from "../components/homeMenu/sideBar"
import { useTranslation } from 'gatsby-plugin-react-i18next'

import MainBanner from '../components/MainBanner'
import TextBanner from '../components/TextBanner'
import Team from "../components/Team"
import Video from "../components/Video"

// Video asset
import video from "../videos/video_equipa.mp4"
import poster from "../images/video-posters/equipaPoster.jpg"

const EquipaPage = () => {
    const { t } = useTranslation()

    return (
        <Layout
            form={t("global", { returnObjects: true }).form}
        >
            <Seo title="Equipa" />
            <Sidebar
                content={t("global", { returnObjects: true }).sidebar}
                projetosPortfolio={t("portfolio", { returnObjects: true }).projetos}
                projetosVenda={t("projetosVenda", { returnObjects: true }).projetos}
            />
            <MainBanner data={t("equipa", { returnObjects: true }).menu} />
            <TextBanner data={t("equipa", { returnObjects: true }).content} />
            <Video data={video} poster={poster} />
            <Team data={t("equipa", { returnObjects: true }).team} />
        </Layout>
    )
}

export default EquipaPage

export const pageQuery = graphql`
  query($language: String!) {
    locales: allLocale(filter: {ns: {in: ["equipa", "global", "projetosVenda", "portfolio"]}, language: {eq: $language}}) {
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