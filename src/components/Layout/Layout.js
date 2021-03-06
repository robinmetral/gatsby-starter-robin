/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Seo from "../Seo"
import Header from "../Header"
import Column from "../Column"

const Layout = ({ pageContext: { frontmatter }, children }) => {
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
    <>
      <Seo title={frontmatter.title} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Column>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Column>
    </>
  )
}

Layout.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
