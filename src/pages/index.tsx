import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import Layout from "../components/Layout"
import { About, Hello, GetInTouch } from "../components/sections"

function IndexPage() {
  const intl = useIntl()
  return (
    <Layout title={intl.formatMessage({ id: "Home" })}>
      <Hello />
      <About />
      <GetInTouch />
    </Layout>
  )
}

export default IndexPage
