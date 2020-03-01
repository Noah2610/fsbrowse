import PropTypes from "prop-types";
import { Box, Text, Stack, Divider } from "@chakra-ui/core";
import FILE_TYPE from "FILE-TYPE";

const Browser = root => {
    if (root.type !== FILE_TYPE.DIR) {
        return (
            <Box color="error">
                <Text color="code">Browser</Text>'s{" "}
                <Text color="code">type</Text> can only be of type{" "}
                <Text color="code">{FILE_TYPE.DIR}</Text>{" "}
            </Box>
        );
    }

    return <div>BROWSER</div>;
};

Browser.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(FILE_TYPE)).isRequired,
    childrenPaths: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Browser;
