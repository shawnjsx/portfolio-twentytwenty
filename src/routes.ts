import SplashPage from './pages/splash'
import AboutPage from './pages/about'
import DiscoverPage from './pages/discover'

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
    key: 'discover',
    Component: DiscoverPage,
    path: {
      path: '/discover',
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
