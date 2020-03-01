import PropTypes from "prop-types";
import { Box, Text, Heading, Stack } from "@chakra-ui/core";
import FILE_TYPE from "FILE-TYPE";
import File from "./File";

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

    const nameDisplay = root.name.replace(/\/?$/, "/");

    return (
        <Box padding={4}>
            <Heading
                fontFamily="mono"
                color="primary"
                textDecoration="underline"
            >
                {nameDisplay}
            </Heading>

            <Stack spacing={0}>
                {root.childrenPaths.map((childPath, i) => {
                    const isEvenIdx = i % 2 === 0;
                    return (
                        <Box position="relative" key={i}>
                            <File
                                path={childPath}
                                width="100%"
                                height="100%"
                                backgroundColor={
                                    isEvenIdx
                                        ? "entryBgPrimary"
                                        : "entryBgSecondary"
                                }
                            />
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
};

Browser.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(FILE_TYPE)).isRequired,
    childrenPaths: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Browser;
