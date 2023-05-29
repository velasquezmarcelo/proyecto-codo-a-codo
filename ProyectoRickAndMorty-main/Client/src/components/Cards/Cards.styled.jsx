import styled from "styled-components"

export const DivCards= styled.div`
    grid-template-columns: repeat(4, 1fr);
    display: grid;
    gap: 1.2em;
    @media (max-width: 700px) {
        {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            margin: 0 auto;
        }
    }
    @media (max-width: 900px) and (min-width: 701px) {
        {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.2em;
        }
    }
    @media (max-width: 1199px) and (min-width: 901px) {
        {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.2em;
        }
    }
`