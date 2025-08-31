import styled from "styled-components"

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
    return (
        <Img src={pokemon.sprites.other.dream_world.front_default ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.other.home.front_default} alt="pokemon" />
    )
}

export default PokemonImg