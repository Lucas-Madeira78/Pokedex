import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`

`

const Img = styled.img`
    max-width: 125px;
`

const Name = styled.p`
    padding-bottom: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
    text-transform: capitalize;
`

const Loading = styled.p`
    text-align: center;
`

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 50px 50px 5px 5px;
    margin: 10px;
    background-color: #009350;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        background-color: #2fa3d4;
        transform: translateY(-2px);
        box-shadow: 0px 3px 0 black;
    }
    text-decoration: none;
    color: inherit;
`

const Pokemon = ( {listItem, list} ) => {
    return (
        <Container as={StyledLink} to={`/card/${list[listItem]?.name}`}>
            {list ? 
                (<Img src={list[listItem]?.sprites.front_default ? list[listItem].sprites.front_default : list[listItem]?.sprites.other.home.front_default} alt="Pokemon not found"/>) 
                : 
                <Loading>Carregando...</Loading>}
            {list ? <Name>{list[listItem]?.name}</Name> : "Pokemon not found"}
        </Container>
    )
}

export default Pokemon;