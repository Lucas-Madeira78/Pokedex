import styled from "styled-components"
import sun from "../../images/sun.png"
import moon from "../../images/moon.png"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

const DayNightImg = styled.img`
    position: absolute;
    top: 5px;
    right: 10px;
    width: 140px;
    transition: 0.2s;

    @media (max-width: 850px) {
        top: 5px;
        right: 5px;
        width: 18%;
    }
`

export const DayNightIcon = () => {
    const { theme, setTheme} = useContext(ThemeContext);

    return (
        <DayNightImg src={theme === "light" ? sun : moon} />
    )
} 