import styled, {css} from "styled-components";

type ModalType = {
    $collapsedForm: boolean
}
const ModalOperationForm = styled.div<ModalType>`
  position: fixed;
  top: -208px;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: 300px;
  transform: translate(-50%, -50%);
  transition: 1s;
  padding: 40px 10px 10px 10px;
  background: #39394B;
  border-radius: 10px;
  box-shadow: 0 2px 10px black;
  z-index: 11;

  ${({$collapsedForm}) => $collapsedForm && css`
    top: 50%;
  `}
  & input, select {
    background: #222131;
    color: rgb(215, 215, 215);
    height: 40px;
    //border: 2px outset black;
    box-shadow: inset 2px 2px black;
    margin-bottom: 2px;
    border-radius: 5px;

    &::placeholder {
      color: rgb(215, 215, 215);
    }
  }

`
const BtnAddForm = styled.button<{ $status: boolean }>`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: white;
  background: radial-gradient(#312b52, rgba(255, 255, 255, 0));
  z-index: 11;
  cursor: pointer;
  font-size: 45px;
  transform: rotate(-0deg);
  transition: 0.5s;

  ${({$status}) => $status && css`
    transform: rotate(-45deg);
  `}
  &:hover {
    background: radial-gradient(red, rgba(255, 255, 255, 0));
  }
`

export const S = {BtnAddForm,ModalOperationForm}