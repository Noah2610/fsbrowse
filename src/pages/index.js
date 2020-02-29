import { Box } from "@chakra-ui/core";
import endpoint from "../endpoint";

const Home = () => {
    const fetched = endpoint.json(".");
    console.log(fetched.name);
    console.log(fetched.path);

    return (
        <div>
            <Box>other</Box>
            <pre>fetched: {JSON.stringify(fetched)}</pre>
            Hello mesh!
        </div>
    );
};

export default Home;
