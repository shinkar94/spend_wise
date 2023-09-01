import styled from "styled-components";

const SignUpBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #222130;

  & form {
    position: relative;
    width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 2px 2px 8px 5px black;
    background: #4f4879;

    & h3 {
      text-align: center;
      color: white;
    }

    & input {
      height: 30px;
      border-radius: 5px;
      background: #222130;
      color: white;
      outline: none;

      &::placeholder {
        color: white;
      }
    }

    & button {
      height: 30px;
      color: white;
      background: linear-gradient(90deg, #4f4879, #222130, #4f4879);
      border: 0;
      cursor: pointer;

      &:hover {
        background: linear-gradient(90deg, #4f4879, #3a693a, #4f4879);
      }
    }

    & img {
      position: absolute;
      top: -30px;
      left: 4px;
      background: #222130;
      border-radius: 50%;
      box-shadow: 0 0 4px 2px black;
      z-index: 2;
    }

    & span {
      position: absolute;
      top: -12px;
      left: 60px;
      padding: 2px 2px 2px 8px;
      border-radius: 2px;
      background: rgba(0, 128, 0, 0.78);
      z-index: 1;
      box-shadow: 0 0 4px 2px black;
      color: #ffffff;
    }

  }
`

export const S = {SignUpBlock}