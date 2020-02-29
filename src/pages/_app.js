import Layout from "../layout";

const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps}></Component>
    </Layout>
);

export default MyApp;
