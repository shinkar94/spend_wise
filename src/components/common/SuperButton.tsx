import React from 'react';
import styled, {css} from "styled-components";

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
            <StButton
                onClick={onButtonHandler}
                position={styleProps.position}
                top={styleProps.top}
                right={styleProps.right}
                width={styleProps.width}
                height={styleProps.height}
                color={styleProps.color}
                bgColor={styleProps.bgColor}
                border={styleProps.border}
                borderRadius={styleProps.borderRadius}
                hover={styleProps.hover}
            >{name}</StButton>
        </>
    )
        ;
};

type StButtonType = {
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
const StButton = styled.button<StButtonType>`
  position: ${({position}) => position};
  top: ${({top}) => top};
  right: ${({right}) => right};
  background: ${({bgColor}) => bgColor};
  color: ${({color}) => color};
  width: ${({width}) => width};
  height: ${({height}) => height};
  border: ${({border}) => border};
  border-radius: ${({borderRadius}) => borderRadius};
  cursor: pointer;
  ${({hover})=> hover && css`
    &:hover{
      border: 0;
      box-shadow: inset 0 0 2px 2px black;
    }
  `}
`