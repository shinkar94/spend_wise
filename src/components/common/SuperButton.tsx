import React from 'react';
import {S} from './style/superButtonStyle'

type ButtonPropsType = {
    name: string
    callBack: () => void
    position?: string
    top?: string
    right?: string
    width?: string
    height?: string
    color?: string
    bgColor?: string
    borderRadius?: string
    border?: string
    hover?: boolean
}


export const SuperButton: React.FC<ButtonPropsType> = (props) => {
    const {name, callBack, ...styleProps} = props
    const onButtonHandler = () => {
        callBack()
    }
    return (
        <>
            <S.Button
                onClick={onButtonHandler}
                $position={styleProps.position}
                $top={styleProps.top}
                $right={styleProps.right}
                $width={styleProps.width}
                $height={styleProps.height}
                $color={styleProps.color}
                $bgColor={styleProps.bgColor}
                $border={styleProps.border}
                $borderRadius={styleProps.borderRadius}
                $hover={styleProps.hover}
            >{name}</S.Button>
        </>
    )
        ;
};
