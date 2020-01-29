import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import AnimatedContent from "./Animated"
import Email from "./Email"
import Header from "./Header"
import SEO from "./Seo"
import Social from "./Social"
import Footer from "./Footer"

import "../styles/style.css"

type LayoutProps = {
  title: string
  children: React.ReactNode
}

const Layout = ({ children, title }: LayoutProps) => {
  const [isActive, toggle] = React.useState()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex min-h-screen flex-col text-indigo-500">
      <SEO title={title} />
      <div
        className={`layout container mx-auto ${isActive &&
          "nav-active"} flex-grow`}
      >
        <Header toggle={() => toggle(!isActive)} />
        <AnimatedContent className="pt-20">{children}</AnimatedContent>
      </div>
      <Social className="hidden md:block" />
      <Email />
      <Footer />
    </div>
  )
}

export default Layout
