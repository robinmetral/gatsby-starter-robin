import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div
      css={css`
        max-width: 300px;
        margin-bottom: 1.45rem;
      `}
    >
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
