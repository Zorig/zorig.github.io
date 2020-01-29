import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import Card from "../components/Card"
import Layout from "../components/Layout"
import Section from "../components/Section"

function Projects() {
  const intl = useIntl()
  return (
    <Layout title={intl.formatMessage({ id: "Projects" })}>
      <Section>
        <div className="flex flex-wrap"></div>
      </Section>
    </Layout>
  )
}

export default Projects
