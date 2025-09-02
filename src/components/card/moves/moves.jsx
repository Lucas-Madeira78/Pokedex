import styled from "styled-components"
import { useState, useEffect } from "react"
import typeIcons from "../../../constants/typeIcons"
import { getInfo } from "../../../services/api"

const MoveList = styled.ul`
    position: absolute;
    top: 68%;
    margin: 0 35px;

    @media (max-width: 600px) {
        margin: 5px 30px;
    }

    @media (max-width: 400px) {
    }
`

const MoveInfo = styled.div`
    display: flex;
    align-items: center;
`

const MoveLi = styled.li`
    padding: 10px 30px;
    list-style: none;
    font-family: 'Gill Sans', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', monospace;;
    font-size: 25px;
    font-weight: bold;
    text-transform: capitalize;

    @media (max-width: 600px) {
        padding: 5px 25px;
        font-size: 14px;
    }
`

const MoveIconImg = styled.img`
    width: 32px;
    border: 2px solid white;
    border-radius: 50px;

    @media (max-width: 600px) {
        width: 24px;
    }

    @media (max-width: 400px) {
        width: 20px;
    }
`

const Moves = ({ pokemon }) => {
    const [movesIcon, setMovesIcon] = useState([])

    useEffect(() => {
        const moves = pokemon.moves
            .filter(move => 
                move.version_group_details.some(detail =>
                    detail.move_learn_method.name === "level-up" &&
                    detail.level_learned_at === 1
                )
            )
            .slice(0, 2)
        ;        

        const fetchMoveIcon = async () => {
            try {
                const icons = await Promise.all(
                    moves.map(async (move) => {
                        const response = await getInfo(move.move.url);
                        return response.data.type.name; 
                    })
                );
                setMovesIcon(icons)
            } catch (error) {
                console.error("Erro ao buscar Ability: ", error);
            }
        }

        if (pokemon) {
            fetchMoveIcon()
        }
    }, [pokemon]);

    const movesName = pokemon.moves
        .filter(move => 
            move.version_group_details.some(detail =>
                detail.move_learn_method.name === "level-up" &&
                detail.level_learned_at === 1
            )
        )
        .map(move => move.move.name).slice(0, 2)       
    ;

    return (
        <MoveList>
            {movesName.map((name, i) => (
                <MoveInfo key={i}>
                    <MoveIconImg src={typeIcons[movesIcon[i]]} />
                    <MoveLi>{name}</MoveLi>
                </MoveInfo>
            ))}
        </MoveList>
    )
}

export default Moves