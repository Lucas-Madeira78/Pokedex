import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import styled from "styled-components"
import sunIcon from "../../images/sunIcon.png"
import moonIcon from "../../images/moonIcon.png"

const ThemeButton = styled.button`
    position: absolute;
    top: 20px;
    width: 60px;
    border-radius: 50px;
    background-color: #dad7d7;
    cursor: pointer;

    @media (max-height: 600px) {
        right: 70px;
        top: 200px;
    }
`

const Icon = styled.img`
    display: flex;
    justify-content: flex-start;
    width: 28px;
    padding: 3px;
    border-radius: 20px;
    background-color: white;
    transition: 0.2s;
    transform: ${props => props.theme.transform};
`

const ThemeToggleButton = () => {
    const { theme, setTheme} = useContext(ThemeContext)

    const SwitchTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <ThemeButton onClick={SwitchTheme}>
            <Icon src={theme === "light" ? sunIcon : moonIcon} />
        </ThemeButton>
    )
}

export default ThemeToggleButton