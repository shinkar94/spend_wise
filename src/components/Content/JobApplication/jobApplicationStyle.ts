import styled from "styled-components";

const JobApp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 300px;
    height: 100px;
    background: #39394B;
    border-radius: 10px;
    box-shadow: 2px 2px 10px black;
    .descriptions{
      p, h3{
        margin: 0;
      }
    }
    & img{
      width: 40px;
      height: auto;
    }
`

export const S = {JobApp}