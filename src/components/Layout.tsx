import * as React from 'react'
import { useLocation } from 'react-router-dom'

import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import styled from '../utils/styled'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation()

  React.useEffect(() => {
    const body = document.querySelector('body')!
    if (pathname === '/about') body.style.background = '#ffffff'
    else body.style.background = '#000000'
  }, [pathname])

  console.log()

  return (
    <PageLayout>
      <SEOHead />
      <Navigation />
      {children}
    </PageLayout>
  )
}

export default Layout

const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`
