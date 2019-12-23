import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import Index from "../index"

import indexStaticQuery from "./__fixtures__/indexStaticQuery"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => indexStaticQuery)
})

describe("Index", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Index />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
