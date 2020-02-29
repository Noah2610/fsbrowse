import { ThemeProvider, Box, theme, CSSReset } from "@chakra-ui/core";

const THEME = {
    ...theme,
    colors: {
        ...theme.colors,
        bg: "#353535",
        primary: "#CCCCCC",
        secondary: "#F92672",
    },
};

const Layout = ({ children }) => (
    <ThemeProvider theme={THEME}>
        <Body>
            <CSSReset />
            {children}
        </Body>
    </ThemeProvider>
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

export default Layout;
