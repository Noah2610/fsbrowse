import Head from "next/head";
import { Box, Text } from "@chakra-ui/core";

const Home = () => {
    return (
        <>
            <Head>
                <meta http-equiv="refresh" content="0; URL=/b" />
            </Head>
            <Box>
                Redirect to{" "}
                <Text display="inline" color="alert">
                    <a href="/b">/b</a>
                </Text>
                !
            </Box>
        </>
    );
};

export default Home;
