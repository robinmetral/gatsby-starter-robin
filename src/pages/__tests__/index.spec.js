import React from "react"
import { useStaticQuery } from "gatsby"
import { render } from "@testing-library/react"
import Index from "../index"

import indexStaticQuery from "./__fixtures__/indexStaticQuery"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => indexStaticQuery)
})

describe("Index", () => {
  it("matches snapshot", () => {
    const index = render(<Index />)
    expect(index).toMatchSnapshot()
  })
})
