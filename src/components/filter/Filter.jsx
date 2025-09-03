import styled from "styled-components"

const Select = styled.select`
    padding: 5px;
    border: none;
    border-radius: 50px;
    margin: 10px;
    background: linear-gradient(to bottom, #f0dc46, #edc147);
    font-weight: bold;
    outline: none;
    cursor: pointer;
    box-shadow: 0px 3px 0 black;

    &:hover {
        background: #f0dc46;
    }
`

const Option = styled.option`
    background-color: ${props => props.theme.background};
    font-size: 15px;
    color: ${props => props.theme.color};
    text-transform: capitalize;
`

const Filter = ({ onChange, selected }) => {
    return (
        <>
            <Select onChange={onChange}>
            <Option value="">{selected.charAt(0).toUpperCase() + selected.slice(1) || "No filter"}</Option>
            <Option value="bug">Bug</Option>
            <Option value="dark">Dark</Option>
            <Option value="dragon">Dragon</Option>
            <Option value="electric">Electric</Option>
            <Option value="fairy">Fairy</Option>
            <Option value="fighting">Fighting</Option>
            <Option value="fire">Fire</Option>
            <Option value="flying">Flying</Option>
            <Option value="ghost">Ghost</Option>
            <Option value="grass">Grass</Option>
            <Option value="ground">Ground</Option>
            <Option value="ice">Ice</Option>
            <Option value="normal">Normal</Option>
            <Option value="poison">Poison</Option>
            <Option value="psychic">Psychic</Option>
            <Option value="rock">Rock</Option>
            <Option value="steel">Steel</Option>
            <Option value="water">Water</Option>
            </Select>
        </>
    )
}

export default Filter