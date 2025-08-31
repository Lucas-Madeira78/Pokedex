import { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import clouds from "../images/clouds.png";

export const ThemeContext = createContext();

const lightTheme = {
    background: "#4893d9",
    url: clouds,
    color: "white"
};

const darkTheme = {
    background: "#181621",
    color: "#f0dc46",
    transform: "translateX(28px)",
    backgroundImage: ", radial-gradient(circle, #f0dc46 1px, transparent 2px), radial-gradient(circle, #f0dc46 1px, transparent 2px)",
    backgroundRepeat: ", repeat, repeat",
    backgroundPosition: ", top, top",
    backgroundSize: ", 108px 65px, 99px 100px"
}

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <StyledThemeProvider theme={ theme === "light" ? lightTheme : darkTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider