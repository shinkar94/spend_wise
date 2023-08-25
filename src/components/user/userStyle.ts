import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #222130;
  color: white;
`
const Content = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  position: relative;
  box-shadow: 2px 2px 5px 2px black;
  border-radius: 5px;
  padding: 45px 5px 5px 5px;
`

const BlockAvatar = styled.div`
  & img{
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 8px 2px black;
    border-radius: 50%;
  }
`
const LeftContent = styled.div`

`
const BlockInfo = styled.div`
  & table {
    background: linear-gradient(135deg, black, #393939);
    padding: 4px;
    border-radius: 4px;
    text-align: center;

    & tr {
      cursor: pointer;
      border: 4px;
      &:hover {
        background: rgba(0, 128, 0, 0.42);
      }
    }

  }
`
const BlockAddCard = styled.div`
  
`

export const S = {Wrapper,Content,BlockAvatar, BlockInfo,BlockAddCard,LeftContent}