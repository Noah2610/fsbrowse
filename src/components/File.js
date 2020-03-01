import PropTypes from "prop-types";
import { Box, Text, Heading, Stack } from "@chakra-ui/core";

const File = ({ path, ...props }) => {
    return <Box {...props}>{path}</Box>;
};

File.propTypes = {
    path: PropTypes.string.isRequired,
};

export default File;
