import styled from "styled-components";

const CardsWrapper = styled.div`
  
`
const Card = styled.div`
  height: 75%;
  background: linear-gradient(to right, #1c1c1c 0%, #3a3a3a 100%);
  color: white;
  border-radius: 20px;
  padding: 1vw;

  .title {
    font-size: 1.2vw;
  }

  .card-number {
    font-size: 2vw;
    text-align: center;
    margin-top: 30px;
    text-shadow: 0 2px rgb(112, 112, 112);
  }

  .tutorial {
    .titleName {
      font-size: 0.5vw;
      margin: 10px 0 0 0;
    }

    .userName {
      font-size: 0.8vw;
      margin: 0;
    }
  }

  .bootomCard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    .date p, .cvv p {
      margin: 0;
      font-size: 0.8vw;
    }

    .date {
      text-align: center;
    }

    .cvv {
      text-align: center;
    }
  }

  & img {
    width: 4vw;
    height: auto;
  }

  & input, select {
    background: black;
    border-radius: 4px;
    color: white;
    height: 30px;
    outline: none;

    &::placeholder {
      color: white;
    }
  }

  & button {
    background: linear-gradient(90deg, #1D1D1D, #363564, #393939);
    margin-top: 5px;
    width: 100%;
    position: relative;
    right: 5px;
    height: 30px;
    border: 0;
    color: white;
    cursor: pointer;

    &:hover {
      background: linear-gradient(90deg, #1D1D1D, #35643b, #393939);
    }

  }
`

export const S = {Card,CardsWrapper}