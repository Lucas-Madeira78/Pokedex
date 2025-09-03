import styled from "styled-components"

const Name = styled.h1`
    display: flex;
    position: absolute;
    top: 4%;
    left: 20%;
    max-width: 300px;
    max-height: 30px;
    text-transform: capitalize;
    line-height: 30px;
    font-family: 'Gill Sans', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', monospace;
    overflow: hidden;

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