import { ThemeProvider, Box, theme, CSSReset } from "@chakra-ui/core";

const THEME = {
    ...theme,
    colors: {
        ...theme.colors,
        bg: "#353535",
        primary: "#CCCCCC",
        secondary: "#F92672",
        alert: "#FF0000",
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

const Polyfills = () => (
    <>
        <script
            src="https://unpkg.com/unfetch/polyfill"
            type="text/javascript"
        />
    </>
);

export default Layout;
