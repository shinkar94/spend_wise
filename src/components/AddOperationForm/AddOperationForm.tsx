import React, {useState} from 'react';
import {v1} from 'uuid';
import {SuperInput} from '../common/SuperInput';
import {SuperButton} from '../common/SuperButton';

import styled, {css} from "styled-components";
import {Dispatch} from "redux";

import {SuperSelect} from "../common/SuperSelect";
import {useAppDispatch, useAppSelector} from "@/hok/useAppSelector";
import {HelperState} from "@/selectors/Selectors";
import {CardsReducerType} from "@/reducer/cardsReducer";
import {addOperation} from "@/reducer/allStateReducer";
import {onBlurAC} from "@/reducer/helperReducer";




export type OperationsTypeObject =
    {
        id: string
        value: string
        type: string
        description: string
        category: string
        date: string
        name: string
        wallet: string
    };

export const AddOperationForm = () => {
    const stateHelper = useAppSelector(HelperState)
    const statusBtn = stateHelper.statusAddBtn
    const dispatch: Dispatch = useAppDispatch()

    const [newItem, setNewItem] = useState<OperationsTypeObject>({
        id: v1(),
        date: '',
        name: '',
        value: '',
        type: '',
        description: '',
        category: '',
        wallet: 'Wallet'
    })
    // console.log('newitem!!!')
    // console.log(newItem)
    const [collapsedForm, setCollapsedForm] = useState<boolean>(false)
    const cardState: CardsReducerType[] = useAppSelector(state => state.wallets)
    const walletName = cardState.map(el => ({value: el.name}))

    const onClickHandler = () => {
        if (newItem.type === '') {
            alert("Error! type = ''")
        } else if (newItem.name === '') {
            alert("Error! name = ''")
        } else if (newItem.date === '') {
            alert("Error! date = ''")
        } else {
            dispatch(addOperation(newItem))
            setNewItem({
                id: v1(),
                date: '',
                name: '',
                value: '',
                type: '',
                description: '',
                category: '',
                wallet: newItem.wallet
            })
        }

    }

    const formDownClick = () => {
        setCollapsedForm(!collapsedForm)
        dispatch(onBlurAC("addBtn"))
    }
    const onChangeOption = (newOption: OperationsTypeObject) => {
        setNewItem(newOption)
    }

    return (
        <div>
            {/*<input type="text" value={newItem.name} onChange={onChangHandler}/>*/}
            <ModalOperationForm collapsedForm={collapsedForm}>
                <SuperButton
                    position = {'absolute'}
                    top={'0'}
                    right={'0'}
                    callBack={formDownClick}
                    name={'X'}
                    bgColor={'linear-gradient(90deg, #ff3333, #a60000)'}
                    width={'20%'}
                    height={'30px'}
                    color={'white'}
                    borderRadius={'4px 10px 4px 4px'}
                    hover={true}
                />
                <SuperInput property={'date'} newItem={newItem} type={'date'} setNewItem={setNewItem}
                            value={newItem.date}/>

                <SuperInput placeholder={'Название покупки'} property={'name'} newItem={newItem} type={'text'}
                            setNewItem={setNewItem}
                            value={newItem.name}/>

                <SuperInput placeholder={'Сумма покупки'} property={'value'} newItem={newItem} type={'number'}
                            setNewItem={setNewItem}
                            value={newItem.value}/>
                <SuperSelect options={walletName} onChangeOption={onChangeOption} property={'wallet'}
                             newItem={newItem}/>
                <div style={{display: 'flex'}}>
                    <p>income</p>
                    <SuperInput setNewItem={setNewItem}
                                value={'income'}
                                type={'radio'}
                                newItem={newItem}
                                property={'type'} name={'form-check'}
                                checked={newItem.type === 'income'}/>
                    <p>outcome</p>
                    <SuperInput setNewItem={setNewItem}
                                value={'outcome'}
                                type={'radio'}
                                newItem={newItem}
                                property={'type'} name={'form-check'}
                                checked={newItem.type === 'outcome'}/>
                </div>

                <SuperInput placeholder={'Описание'} property={'description'} newItem={newItem} type={'text'}
                            setNewItem={setNewItem}
                            value={newItem.description}/>

                <SuperInput placeholder={'Категория'} property={'category'} newItem={newItem} type={'text'}
                            setNewItem={setNewItem}
                            value={newItem.category}/>

                <SuperButton
                    callBack={onClickHandler}
                    name={'ADD'}
                    bgColor={'linear-gradient(90deg, rgba(255, 255, 255, 0), #312b52, rgba(255, 255, 255, 0))'}
                    height={'30px'}
                    color={'white'}
                    borderRadius={'4px'}
                />
            </ModalOperationForm>

            <BtnAddForm status={statusBtn} onClick={formDownClick}>+</BtnAddForm>
        </div>
    );
};

type ModalType = {
    collapsedForm: boolean
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

  ${props => props.collapsedForm && css`
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
const BtnAddForm = styled.button<{ status: boolean }>`
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

  ${props => props.status && css`
    transform: rotate(-45deg);
  `}
  &:hover {
    background: radial-gradient(red, rgba(255, 255, 255, 0));
  }
`

