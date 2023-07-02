import '../styles/global.css'
import mixpanel from 'mixpanel-browser';
function MyApp({ Component, pageProps }) {
  mixpanel.init('9d9e82201e543f3157709d67f80f69ae', { debug: true, track_pageview: true, persistence: 'localStorage' });
  return <Component {...pageProps} />
}

export default MyApp