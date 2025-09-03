import styled from "styled-components"
import Pokemon from "../../pokemon/pokemon";
import { useEffect, useRef } from "react";

const Container = styled.div`
    display: grid;
    max-height: 60vh;
    grid-template-columns: repeat(5, minmax(auto, 150px));
    padding: 0 20px;
    overflow-y: auto;

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, minmax(auto, 150px));
        max-height: 60vh;
        padding: 0 10px;
    }
    &::-webkit-scrollbar {
        width: 5px; /* largura da barra */
    }

    &::-webkit-scrollbar-track {
        background: rgba(255,255,255,0.1); 
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #009350, #2fa3d4);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #2fa3d4;
    }
`

const Loading = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 50px;
    margin: 10px;
    background-color: #009350;
`

const ListContainer = ({ list, filter }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current && list?.length && !filter) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [list])

    return (
        list ? (
            <Container ref={containerRef}>
                {list.map((__, index) => (
                    <div data-testid="pokemon-card" key={index}>
                        <Pokemon listItem={index} list={list} filter={filter} />
                    </div>
                ))}
            </Container>    
            ) : (
                <Loading>
                    <p>Carregando pokemons...</p>
                </Loading>
        )
    )
}

export default ListContainer