import React, {ChangeEvent} from 'react';
import {OperationsTypeObject} from "../AddOperationForm/AddOperationForm";

type InputPropsType = {
    setNewItem: (newItem: OperationsTypeObject) => void
    value: string
    type: string
    newItem: OperationsTypeObject
    property: string
    placeholder?: string
    name?: string
    checked?: boolean
}

export const SuperInput: React.FC<InputPropsType> = (props) => {
    const {setNewItem, value, type, newItem, property, placeholder, name, checked} = props
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // setNewItem(type === 'number'
        //     ? {...newItem, [property]: Number(e.currentTarget.value)}
        //     : {...newItem, [property]: e.currentTarget.value})
        setNewItem({...newItem, [property]: e.currentTarget.value})
    }
    return (
        <>
            <input placeholder={placeholder}
                   type={type}
                   value={value}
                   onChange={onChangeInputHandler}
                   name={name}
                   checked={checked}/>
        </>
    );
};