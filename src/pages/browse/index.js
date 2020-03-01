import useSWR from "swr";
import { Box, Text, Stack, Divider } from "@chakra-ui/core";
import endpoint from "ENDPOINT";
import FILE_TYPE from "FILE-TYPE";
import Browser from "../../components/Browser";

const BrowseRoot = () => {
    const path = "lmao"; // TODO

    const { data: file, error: fetchError } = useSWR(path, endpoint.json, {});

    console.log(file);

    const error =
        fetchError || (file === undefined && new Error("No file data"));

    if (error) {
        return (
            <Box>
                <div>An error occured!</div>
                {error.message && (
                    <div>
                        <Text fontFamily="mono" color="error">
                            {error.message}
                        </Text>
                    </div>
                )}
            </Box>
        );
    } else {
        if (file.type === FILE_TYPE.DIR) {
            return (
                <Stack isInline>
                    <Box width="49vw" height="100vh">
                        <Browser {...file} />
                    </Box>
                    <Divider orientation="vertical" width="2vw" />
                    <Box width="49vw" height="100vh">
                        <Browser {...file} />
                    </Box>
                </Stack>
            );
        } else if (file.type === FILE_TYPE.FILE) {
            return (
                <Box>
                    <Text fontFamily="mono" color="warn">
                        TODO: Render FILE
                    </Text>
                </Box>
            );
        }
    }
};

export default BrowseRoot;
