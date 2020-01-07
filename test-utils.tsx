// wraps all tests with the emotion theme provider
// from https://testing-library.com/docs/react-testing-library/setup#custom-render

import React, { ReactNode, ReactElement } from "react"
import { render } from "@testing-library/react"
import { ThemeProvider } from "emotion-theming"
import { CacheProvider } from "@emotion/core"
import createCache from "@emotion/cache"

import theme from "./src/theme"
import GlobalStyles from "./src/components/GlobalStyles"

/* create emotion cache to avoid :first-child warnings */
const emotionCache = createCache()
emotionCache.compat = true

type TestWrapperProps = {
  children?: ReactNode
}

const TestWrapper = ({ children }: TestWrapperProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}

const customRender = (ui: ReactElement, options?: object) =>
  render(ui, { wrapper: TestWrapper, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
