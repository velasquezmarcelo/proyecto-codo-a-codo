import styled from "styled-components";

export const DivCardDetail = styled.div`
display: flex;
border: 0.2em solid #5b246c;
border-radius: 0.7em;
align-items: center;
flex-direction: column;
width: 18em;
margin-top:0.5em;
margin-bottom: 0.5em;

`
export const Mih2Detail = styled.h2`
text-shadow: 2px 2px 4px red;
color: #ffffff;
background-color: rgba(255, 255, 255, 0.5);
width: 11em;
padding: 0.2em;
border-radius: 0.8em;
border: 0.1em solid #5b246c;
margin: 0.3em;

&:hover{
    background-color:#5b246c;
    color:rgba(255, 255, 255, 0.5) ;
    text-shadow: 2px 2px 4px gold;
    border: 0.1em solid rgba(255, 255, 255, 0.5);
}
`