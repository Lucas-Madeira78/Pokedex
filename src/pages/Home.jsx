import PokemonList from "../components/pokemon-list/PokemonList";
import ThemeToggleButton from "../components/themeToggleButton/ThemeToggleButton";
import { DayNightIcon } from "../components/sunAndMoon/sunAndMoon";


const Home = () => {
    return (
        <>
            <DayNightIcon />
            <ThemeToggleButton />
            <PokemonList />
        </>
    )
} 

export default Home