import styled from "styled-components"
import { Link } from "react-router-dom"

const Button = styled(Link)`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 3%;
    width: 95%;
    padding: 10px;
    border: 5px solid #e0e0de;
    border-radius: 45%;
    margin-bottom: 36px;
    color: white;
    background: linear-gradient(to bottom, #de1822, #94010b);
    text-decoration: none;
    font-family: 'Gill Sans', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', monospace;
    font-size: 30px;
    font-weight: bold;
    transform: translateX(9px);

    &:hover {
        background: #de1822;
        transform: translate(9px, -1px);
    }

    @media (max-width: 600px) {
        margin-bottom: 35px;
        padding: 0px;
        border: 3px solid #e0e0de;
        border-radius: 50px;
        font-size: 20px;
    }

    @media (max-width: 360px) {
        margin-bottom: 25px;
    }
`

const ReturnButton = () => {
    return (
        <Button to={"/"}><em>Return</em></Button>
    )
}

export default ReturnButton