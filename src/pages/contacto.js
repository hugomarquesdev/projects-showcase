import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { useTranslation } from 'gatsby-plugin-react-i18next'

import MainBanner from '../components/MainBanner'
import Sidebar from "../components/homeMenu/sideBar"
import Form from "../components/FormContacts"
import Contacts from '../components/Contacts'

const ContactoPage = () => { 
    const { t } = useTranslation()

    return(
        <Layout 
            form={t("global", { returnObjects: true }).form}
            hideForm
        >
            <Seo title="Contacto" />
            <Sidebar 
                content={t("global", { returnObjects: true }).sidebar}
                projetosPortfolio={t("portfolio", { returnObjects: true }).projetos}
                projetosVenda={t("projetosVenda", { returnObjects: true }).projetos}
            />
            <MainBanner data={t("contacto", { returnObjects: true }).menu} />
            <Contacts data={t("contacto", { returnObjects: true }).contact}/>
            <Form data={t("contacto", { returnObjects: true }).form} />
        </Layout>
    )
}

export default ContactoPage

export const pageQuery = graphql`
  query($language: String!) {
    locales: allLocale(filter: {ns: {in: ["contacto", "global", "projetosVenda", "portfolio"]}, language: {eq: $language}}) {
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