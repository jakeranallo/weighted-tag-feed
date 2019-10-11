import * as React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { reset, typography, theme } from '../global'

type GlobalProps = {
  children?: React.ReactNode
}

const GlobalStyle = createGlobalStyle<GlobalProps>`
  ${reset}
  ${typography}
`
export const SpruceProvider = (props: GlobalProps) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {props.children}
      </>
    </ThemeProvider>
  )
}
