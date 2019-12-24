import React from "react"
import { useStaticQuery } from "gatsby"
import { render } from "test-utils"
import IndexPage from "../index"

import indexStaticQuery from "./__fixtures__/indexStaticQuery"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => indexStaticQuery)
})

describe("Index", () => {
  it("matches snapshot", () => {
    const index = render(<IndexPage />)
    expect(index).toMatchSnapshot()
  })
})
