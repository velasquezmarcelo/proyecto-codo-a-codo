import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkNuevo = styled(Link)`
    text-decoration: none;
    padding: 0;
    color: #fefefe;
    font-weight: bold;
    font-size: 1.5em;
`;

export const Divlinks = styled.div`
margin:.5em;
text-align: center;
margin: auto;
width: 100%;
height: 100%;
padding: 0.2em;
display:flex;
justify-content: space-around;
`
export const Boton = styled.button`
    background-color: rgba(255, 255, 255, 0.5);
    border: 0.2em solid #5b246c;
    color: white;
    padding: 1em 2em;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    border-radius: 0.5em;

    &:hover{
        background-color: #5b246c;
        color: white;
        border: 0.2em solid rgba(255, 255, 255, 0.5);
        
}
`
export const Boton2 = styled.button`
    background-color: rgb(255, 0, 0);
    border: 0.2em solid #ffffff;
    color: white;
    padding: 0.2em;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    border-radius: 0.5em;

    &:hover{
        background-color:white;
        color: white;
        border: 0.2em solid rgb(255, 0, 0);
        
}
`
export const LinkNuevo2 = styled(Link)`
    text-decoration: none;
    padding: 0;
    color: black;
    font-weight: bold;
    font-size: 1.5em;

    
`;



