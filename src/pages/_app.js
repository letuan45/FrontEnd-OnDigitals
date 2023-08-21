import MainHead from '@/components/MainHead/MainHead';
import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainHead />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
