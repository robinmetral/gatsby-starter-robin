import React from "react"
import { text } from "@storybook/addon-knobs"
import Header from "../header"

export default {
  title: "Header",
}

// Knobs for React props
export const base = () => (
  <Header siteTitle={text("Title", "Gatsby Default Starter")} />
)
