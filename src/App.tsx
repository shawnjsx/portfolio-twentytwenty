import * as React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { BrowserRouter, Route } from 'react-router-dom'
import { RouteTransitionProvider } from 'react-route-transition'

import Layout from './components/Layout'
import Noise from './components/Noise'
import Cursor from './components/Cursor'
import { GlobalStyles, theme } from './shared/styles'
import SplashPage from './pages/splash'
import AboutPage from './pages/about'

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Cursor />
      <BrowserRouter>
        <Layout>
          <RouteTransitionProvider>
            <Route path="/" exact>
              <SplashPage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
          </RouteTransitionProvider>
        </Layout>
      </BrowserRouter>
      <Noise />
    </ThemeProvider>
  )
}

export default App
