import styled from "styled-components";
import { getPokemonList, getPokemonOfList, getTypeList } from "../../services/api";
import { useEffect, useState } from "react";
import arrow from "../../images/arrow.png"
import Filter from "../filter/Filter";
import ListContainer from "./listContainer/listContainer";
import { useLocation } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    margin-top: 60px;
    background: rgba(255,255,255,0.2);
    backdrop-filter: blur(10px);

    @media (max-width: 400px) {
        padding-top: 15px;
    }
`

const Img = styled.img`
    width: 50px;
    padding: 10px;
    margin: 20px;
    border: 2px solid black;
    border-radius: 50px;
    box-shadow: 0px 3px 0 black;
    color: black;
    background: linear-gradient(to bottom, #f0dc46, #edc147);
    cursor: pointer;

    &:hover {
        background: #f0dc46;
        transform: translateY(-2px);
    }

    @media (max-width: 400px) {
        margin: 10px;
    }
`


const PokemonList = () => {
    const location = useLocation()
    const [pokemonList, setPokemonList] = useState();
    const [limit, setLimit] = useState(location.state?.id || 10);
    const [filterSelect, setFilterSelect] = useState("")

    useEffect(() => {
        async function fetchPokemonData() {
            if (filterSelect) {               
                const list = await getTypeList(filterSelect)
                const data = await getPokemonOfList(list.data.pokemon, true)
                setPokemonList(data.slice(0, limit));
            } else {               
                const list = await getPokemonList(limit);             
                const data = await getPokemonOfList(list);
                setPokemonList(data)                
            }
        }
        console.log(location.state?.id);
        fetchPokemonData(); 
    }, [limit, filterSelect])

    const loadMore = () => {
        setLimit((prevlimit) => prevlimit + 10);
    };

    return (
        <Wrapper>
            <Filter onChange={(e) => setFilterSelect(e.target.value)} />
            <ListContainer list={pokemonList} />
            <Img role="button" src={arrow} onClick={loadMore} />
        </Wrapper>
    )
}

export default PokemonList;