import styled from "styled-components";

const AccountWidgetWrapper = styled.div`
  width: 35%;
  background: #39394B;
  height: 350px;
  border-radius: 10px;
  color: white;
  padding: 4px;
  min-width: 300px;
  position: relative;
  overflow: hidden;
  box-shadow: 2px 2px 10px black;
`
const CardsWrapper = styled.div`
  
`

const Card = styled.div`
    width: 100%;
    height: 75%;
    background: linear-gradient(to right, #1c1c1c 0%, #3a3a3a 100%);
    color: white;
    border-radius: 20px;
    padding: 1vw;
    .title{
      font-size: 1.2vw;
    }
    .card-number{
      font-size: 2vw;
      text-align: center;
      margin-top: 30px;
      text-shadow: 0 2px  rgb(112, 112, 112);
    }
    .tutorial {
      .titleName{
        font-size: 0.5vw;
        margin: 10px 0 0 0;
      }
      .userName{
        font-size: 0.8vw;
        margin: 0;
      }
    }
    .bootomCard{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      .date p, .cvv p{
        margin: 0;
        font-size: 0.8vw;
      }
      .date{
        text-align: center;
      }
      .cvv{
        text-align: center;
      }
    }
    & img{
      width: 4vw;
      height: auto;
    }
`

export const S = {Card,CardsWrapper,AccountWidgetWrapper}