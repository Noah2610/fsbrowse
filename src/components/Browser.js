import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Box, Text, Heading, Stack } from "@chakra-ui/core";
import FILE_TYPE from "FILE-TYPE";
import Entry from "./Entry";

// TODO: Refactor into an input manager or similar
const KEYS = {
    ARROW_UP: 38,
    ARROW_DOWN: 40,
};
const keyCodesFor = chars => chars.map(c => c.toUpperCase().charCodeAt(0));
const BINDING_NAMES = {
    UP: "up",
    DOWN: "down",
};
const BINDINGS = [
    {
        name: BINDING_NAMES.UP,
        keys: [...keyCodesFor(["k", "w"]), KEYS.ARROW_UP],
    },
    {
        name: BINDING_NAMES.DOWN,
        keys: [...keyCodesFor(["j", "s"]), KEYS.ARROW_DOWN],
    },
];

const bindingFromEvent = keyboardEvent => {
    const keyCode = keyboardEvent.keyCode;
    return BINDINGS.find(binding => binding.keys.includes(keyCode));
};

const Browser = ({ root, isFocused }) => {
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
    const childrenCount = root.childrenPaths.length;

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onKeyDown = event => {
        let selectionMod = null;
        const binding = bindingFromEvent(event);

        if (binding) {
            switch (binding.name) {
                case BINDING_NAMES.UP: {
                    selectionMod = -1;
                    break;
                }
                case BINDING_NAMES.DOWN: {
                    selectionMod = 1;
                    break;
                }
            }
        }

        if (selectionMod) {
            setSelectedIndex(prevIndex => {
                const newIndex = Math.max(
                    Math.min(prevIndex + selectionMod, childrenCount - 1),
                    0
                );
                return newIndex;
            });
        }
    };

    console.log(selectedIndex);

    return (
        <Box
            padding={4}
            onKeyDown={onKeyDown}
            tabIndex="1"
            ref={isFocused && (node => node && node.focus())}
        >
            <Heading
                fontFamily="mono"
                color="primary"
                textDecoration="underline"
            >
                {nameDisplay}
            </Heading>

            <Stack spacing={0}>
                {root.childrenPaths.map((childPath, i) => {
                    const isSelected = i === selectedIndex;
                    const isEvenIdx = i % 2 === 0;
                    const selectedProps = isSelected
                        ? {
                              borderWidth: "1px",
                              borderStyle: "solid",
                              borderColor: "highlight",
                          }
                        : {};
                    return (
                        <Box position="relative" key={i}>
                            <Entry
                                path={childPath}
                                width="100%"
                                height="100%"
                                backgroundColor={
                                    isEvenIdx
                                        ? "entryBgPrimary"
                                        : "entryBgSecondary"
                                }
                                {...selectedProps}
                            />
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
};

Browser.propTypes = {
    root: PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        type: PropTypes.oneOf(Object.values(FILE_TYPE)).isRequired,
        childrenPaths: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    isFocused: PropTypes.bool,
};

export default Browser;
