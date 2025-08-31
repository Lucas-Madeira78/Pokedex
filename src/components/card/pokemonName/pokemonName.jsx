import styled from "styled-components"

const Name = styled.h1`
    position: absolute;
    top: 4%;
    left: 20%;
    text-transform: capitalize;
    line-height: 30px;
    font-family: 'Gill Sans', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', monospace;

    @media (max-width: 600px) {
        top: 3%;
        font-size: 24px;
    }
`

const PokemonName = ( {name} ) => {
    return (
        <Name>{name.name}</Name>
    )
}

export default PokemonName