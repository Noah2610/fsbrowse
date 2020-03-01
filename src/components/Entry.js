import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/core";

const Entry = forwardRef(({ path, ...props }, ref) => {
    return (
        <Box ref={ref} {...props}>
            {path}
        </Box>
    );
});

Entry.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Entry;
