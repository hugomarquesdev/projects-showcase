import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Sidebar from "../components/homeMenu/sideBar"
import { useTranslation } from 'gatsby-plugin-react-i18next'
import styled from "styled-components"
import { Image } from '../components/Images'
import Projetos from "../components/Projects"
import ProjectsTitle from "../components/ProjectsTitle"

const ProjetosVendaPage = () => {
    const { t } = useTranslation()

    return(
        <Layout
            form={t("global", { returnObjects: true }).form}
        >
            <Seo title="Para Venda" />
            <Sidebar 
                content={t("global", { returnObjects: true }).sidebar}
                projetosPortfolio={t("portfolio", { returnObjects: true }).projetos}
                projetosVenda={t("projetosVenda", { returnObjects: true }).projetos}
            />
            <StyledTitle>
                <Image src='venda/background.png' alt='Edifício' background />
                <ProjectsTitle
                    title='Todos os <b>Projetos</b>'
                />
            </StyledTitle>
            <Projetos 
                data={t("projetos", { returnObjects: true }).cards} 
            />
        </Layout>
    )
}

export default ProjetosVendaPage

export const pageQuery = graphql`
  query($language: String!) {
    locales: allLocale(filter: {ns: {in: ["projetosVenda", "global", "projetosVenda", "portfolio", "projetos"]}, language: {eq: $language}}) {
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

const StyledTitle = styled.div`
    .background{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index:-1;
    }
`