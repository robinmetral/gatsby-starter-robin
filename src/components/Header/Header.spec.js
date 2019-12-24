import React from "react"
import { render } from "test-utils"
import Header from "./Header"

describe("Header", () => {
  it("renders the title", () => {
    const { getByTestId } = render(
      <Header siteTitle="Gatsby Default Starter" />
    )

    expect(getByTestId("title")).toHaveTextContent("Gatsby Default Starter")
  })
  it("matches snapshot", () => {
    const header = render(<Header siteTitle="Default Starter" />)

    expect(header).toMatchSnapshot()
  })
})
