import React, {ChangeEvent,} from 'react'
import {OperationsTypeObject} from '../AddOperationForm/AddOperationForm';


type SuperSelectPropsType = {
    options: any[]
    onChangeOption: (option: OperationsTypeObject) => void
    property:string
    newItem: OperationsTypeObject
}

export const SuperSelect: React.FC<SuperSelectPropsType> = (props) => {
    const {options, onChangeOption, property,newItem} = props

    const mappedOptions= options.map((o, index) => (
        <option key={index} value={o.value}>
            {o.value}
        </option>
    ))

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption({...newItem, [property]: e.currentTarget.value})
    }

    return (
        <select onChange={onChangeCallback}>
            {mappedOptions}
        </select>
    )
}
