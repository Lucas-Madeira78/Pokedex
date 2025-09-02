import { useEffect, useState } from "react"
import styled from "styled-components"
import abilityImg from "../../../images/ability.png"
import { getInfo } from "../../../services/api"

const AbilityDiv = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 3%;
    align-items: baseline;
`

const AbilityLabel = styled.img`
    display: inline;
    width: 40%;
    margin: 30px 0px 0px 20px;

        @media (max-width: 600px) {
        margin: 10px 0px 0 15px;
    }
`

const AbilityName = styled.h2`
    align-self: self-start;
    margin: 20px 5px;
    color: #a30000;
    line-height: 40px;
    font-family: 'Gill Sans', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', monospace;
    font-size: 30px;
    text-transform: capitalize;

    @media (max-width: 600px) {
        font-size: 24px;
        line-height: 20px;
        margin: 10px 0 10px 5px;
    }

    @media (max-width: 400px) {
        font-size: 18px;
        line-height: 20px;
    }
`

const AbilityText = styled.p`
    position: absolute;
    top: 59%;
    margin: 0 35px;
    font-family: monospace;
    font-size: 14px;
    font-weight: bold;

    @media (max-width: 600px) {
        margin: 0 30px;
        font-size: 12px;
    }

    @media (max-width: 340px) {
        margin: 0 20px;
        font-size: 11px;
    }
`

const Ability = ({ pokemon }) => {
    const [ability, setAbility] = useState()

    useEffect(() => {
        const fetchAbility = async () => {
            try {
                const response = await getInfo(pokemon?.abilities[0].ability.url);
                const abilityDescripition = response.data.effect_entries.find(
                    (n) => n.language.name === "en"
                );              
                if (abilityDescripition.effect.length > 195) {
                    setAbility(abilityDescripition.effect.slice(0, abilityDescripition.effect.indexOf(".") + 1))
                }else {
                    setAbility(abilityDescripition.effect)
                }
            } catch (error) {
                console.error("Erro ao buscar Ability: ", error);
            }
        }
        if (pokemon) {
            fetchAbility()
        }
    }, [pokemon])

    return (
        <>
            <AbilityDiv>
                <AbilityLabel src={abilityImg} alt="ability" />
                <AbilityName>{pokemon?.abilities[0].ability.name}</AbilityName>
            </AbilityDiv>
            <AbilityText>{ability}</AbilityText> 
        </>
    )
}

export default Ability