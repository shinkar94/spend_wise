import React, {useState} from 'react';
import {v1} from 'uuid';
import {SuperInput} from '../common/SuperInput';
import {SuperButton} from '../common/SuperButton';

import {Dispatch} from "redux";

import {SuperSelect} from "../common/SuperSelect";
import {useAppDispatch, useAppSelector} from "@/hok/useAppSelector";
import {HelperState} from "@/selectors/Selectors";
import {CardsReducerType} from "@/reducer/cardsReducer";
import {addOperation} from "@/reducer/allStateReducer";
import {onBlurAC} from "@/reducer/helperReducer";

import {S} from './style'


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
            <S.ModalOperationForm $collapsedForm={collapsedForm}>
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
            </S.ModalOperationForm>

            <S.BtnAddForm $status={statusBtn} onClick={formDownClick}>+</S.BtnAddForm>
        </div>
    );
};


