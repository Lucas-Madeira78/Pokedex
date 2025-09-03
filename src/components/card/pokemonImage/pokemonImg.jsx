import styled from "styled-components"
import pokeBall from "/icons/pokeball.svg"

const Img = styled.img`
    position: absolute;
    top: 10%;
    left: 8%;
    width: 100%;
    max-width: 84%;
    height: 100%;
    max-height: 38%;
    border-radius: 5px;
    backdrop-filter: blur(5px);
`

const PokemonImg = ({ pokemon }) => {
    const imgSrc = () => {
        if (pokemon.sprites.other.dream_world.front_default) {
            return pokemon.sprites.other.dream_world.front_default
        } else if (pokemon.sprites.other.home.front_default) {
            return pokemon.sprites.other.home.front_default
        } else {
            return ""
        }
    }

    return (
        <Img src={imgSrc() || pokeBall} alt="pokemon" />
    )
}

export default PokemonImg