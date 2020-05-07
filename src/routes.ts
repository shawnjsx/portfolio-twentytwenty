import SplashPage from './pages/splash'
import AboutPage from './pages/about'

export default [
  {
    key: 'splash',
    Component: SplashPage,
    path: {
      path: '/',
      exact: true,
    },
  },
  {
    key: 'about',
    Component: AboutPage,
    path: {
      path: `/about`,
    },
  },
]
