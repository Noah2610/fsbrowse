import Layout from "../layout";

const App = ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps}></Component>
    </Layout>
);

export default App;
