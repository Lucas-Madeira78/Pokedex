import styled from "styled-components"
import PokemonName from "./pokemonName/pokemonName"
import TypeIcon from "./typeIcon/typeIcon"
import PokemonImg from "./pokemonImage/pokemonImg"
import bgImage from "../../constants/bgImage"
import Moves from "./moves/moves"
import Ability from "./ability/ability"
import ReturnButton from "./returnBtn/returnButton"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 500px;
    aspect-ratio: 100 / 140;
    max-height: 700px;
    background-image: url(${(props) => props.$bgimage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;

    @media (max-width: 600px) {
        max-width: 400px;
    }
`

const Card = ({ pokemon }) => {
    return ( 
        <Container $bgimage={bgImage[pokemon.types[0].type.name]}>
            <PokemonName name={pokemon} />
            <TypeIcon pokemon={pokemon} />
            <PokemonImg pokemon={pokemon} />
            <Ability pokemon={pokemon} />
            <Moves pokemon={pokemon} />
            <ReturnButton />
        </Container>
    )
}

export default Card