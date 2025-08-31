import typeIcons from "../../../constants/typeIcons"
import styled from "styled-components"

const Type = styled.img`
    position: absolute;
    top: 3.7%;
    right: 5%;
    width: 7%;
`

const TypeIcon = ({ pokemon }) => {
    return (
        <Type src={typeIcons[pokemon.types[0].type.name]} />
    )
}

export default TypeIcon