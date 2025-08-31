import { createGlobalStyle } from "styled-components";
import landscape from "../images/landscape.png";

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 20px;
        background-image: url(${props => props.theme.url}), url(${landscape}) ${props => props.theme.backgroundImage};
        background-repeat: no-repeat, no-repeat ${props => props.theme.backgroundRepeat};
        background-position: top, bottom ${props => props.theme.backgroundPosition};
        background-size: 100% 30%, 100% 60% ${props => props.theme.backgroundSize};
        background-color: ${props => props.theme.background};
        transition: 0.2s;

        @media (max-width: 400px) {
            padding: 10px;
        }
    }
`