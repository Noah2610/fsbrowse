import { ThemeProvider, Box, theme, CSSReset } from "@chakra-ui/core";

const THEME = {
    ...theme,

    colors: {
        ...theme.colors,
        bg: "#353535",
        primary: "#CCCCCC",
        secondary: "#F92672",
        entryBgPrimary: "#252525",
        entryBgSecondary: "#333333",
        highlight: "#AFD787",
        error: "#87AFD7",
        warn: "#E5C07B",
        code: "#587992",
    },
};

const Layout = ({ children }) => (
    <>
        <Polyfills />
        <ThemeProvider theme={THEME}>
            <CSSReset />
            <Body>{children}</Body>
        </ThemeProvider>
    </>
);

const Body = ({ children, ...props }) => (
    <Box
        {...props}
        backgroundColor="bg"
        color="primary"
        fontFamily="mono"
        width="100vw"
        height="100vh"
    >
        {children}
    </Box>
);

const Polyfills = () => <></>;

export default Layout;
