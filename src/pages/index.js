import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { connect } from 'react-redux'
import styled from "styled-components"
import { media } from '../components/Styles'

import Sidebar from "../components/homeMenu/sideBar"
import MainBanner from '../components/MainBanner'
import BannerHome from '../components/BannerHome'
import { Image } from '../components/Images'
import Form from "../components/FormCasa"

const IndexPage = () => {
    const { t } = useTranslation()

    return (
        <Layout
            form={t("global", { returnObjects: true }).form}
            hideForm
        >
            <Seo title="Home" defTitle />
            <Image
                src={'home/bg.png'}
                alt='Ponto Urbano'
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1
                }}
            />
            <Sidebar
                content={t("global", { returnObjects: true }).sidebar}
                projetosPortfolio={t("portfolio", { returnObjects: true }).projetos}
                projetosVenda={t("projetosVenda", { returnObjects: true }).projetos}
            />
            <MainBanner data={t("home", { returnObjects: true }).menu} />
            <BannerHome
                data={t("home", { returnObjects: true }).textBanner}
                images={t("home", { returnObjects: true }).images}
            />
            <BottomStyled>
                <div className='bg-image'>
                    <Image
                        src={'home/bg2.png'}
                        alt='Ponto Urbano'
                    />
                </div>
                <Form 
                    data={t("global", { returnObjects: true }).form} 
                    transparent
                    title
                />
            </BottomStyled>
        </Layout>
    )
}

export default connect(state => ({
    news: state.app.news
}), null)(IndexPage)

const BottomStyled = styled.section`
    position:relative;
    padding-top:35vh;

    ${media.xl`
        padding-top:unset;
    `}

    .bg-image{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        z-index: -1;

        .image{
            height:100%;
        }

        ::before{
            content:'';
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background-color: #303030;
            opacity: 0.98;
            z-index: 1;
        }
    }
`

export const pageQuery = graphql`
  query($language: String!) {
    locales: allLocale(filter: {ns: {in: ["home", "global", "projetosVenda", "portfolio"]}, language: {eq: $language}}) {
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