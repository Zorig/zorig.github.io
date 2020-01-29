import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"

import Layout from "../components/Layout"
import Section from "../components/Section"

function About() {
  const intl = useIntl()
  return (
    <Layout title={intl.formatMessage({ id: "About" })}>
      <Section>
        <h5 className="text-center">
          {intl.formatMessage({ id: "coming soon" })}
        </h5>
      </Section>
    </Layout>
  )
}

export default About
