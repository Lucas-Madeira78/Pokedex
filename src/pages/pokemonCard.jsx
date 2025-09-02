import { useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getPokemon } from "../services/api"
import ThemeToggleButton from "../components/themeToggleButton/ThemeToggleButton"
import { DayNightIcon } from "../components/sunAndMoon/sunAndMoon"
import Card from "../components/card/card"

const PokemonCard = () => {
    const location = useLocation();
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        getPokemon(name).then(response => setPokemon(response.data));
        console.log(location.state?.id);
    }, [name]);

    if (!pokemon) return <p>Carregando...</p>

    return (
        <>
            <DayNightIcon />
            <ThemeToggleButton />
            <Card pokemon={pokemon} />
        </>
    )
}

export default PokemonCard