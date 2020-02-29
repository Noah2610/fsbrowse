import endpoint from "ENDPOINT";

const BrowsePath = ({ path }) => {
    const pathData = endpoint.json(path);
    console.log(pathData);

    return <>HELLO BROWSE</>;
};

BrowsePath.getInitialProps = async ({ query }) => {
    return {
        path: query.path.join("/"),
    };
};

export default BrowsePath;
