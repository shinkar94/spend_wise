import styled from "styled-components";

const TopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;

  .block {
    background: #39394B;
    height: 400px;
    border-radius: 10px;
    color: white;
    min-width: 300px;
    box-shadow: 2px 2px 10px black;
  }

  .graf {
    width: 60%;
  }

  .analitic {
    width: 35%;
    height: 90%;
    overflow-y: auto;

    & h3 {
      text-align: center;
    }
  }
`

const BottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  padding: 20px 0;
  color: white;
`

export const S = {BottomContainer, TopContainer}