import React from "react"
import { ThemeProvider } from "emotion-theming"
import { Global } from "@emotion/core"

import theme from "./src/theme"
import GlobalStyles from "./src/GlobalStyles"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
    {element}
  </ThemeProvider>
)
