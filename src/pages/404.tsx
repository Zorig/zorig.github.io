import React from "react"

import Layout from "../components/Layout"
import Section from "../components/Section"

const NotFoundPage = () => (
  <Layout title="404: Not found">
    <Section>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Section>
  </Layout>
)

export default NotFoundPage
