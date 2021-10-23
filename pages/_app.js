import '../styles/global.css';
import { AppProvider } from '../store/context';
import Layout from '../components/layout/Layout';
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
