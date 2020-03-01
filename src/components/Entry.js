import PropTypes from "prop-types";
import { Box, Text, Heading, Stack } from "@chakra-ui/core";

const Entry = ({ path, ...props }) => {
    return <Box {...props}>{path}</Box>;
};

Entry.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Entry;
