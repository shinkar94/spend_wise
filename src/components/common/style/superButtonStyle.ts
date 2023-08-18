import styled, {css} from "styled-components";

type StButtonType = {
    $position?: string
    $top?: string
    $right?: string
    $width?: string
    $height?: string
    $color?: string
    $bgColor?: string
    $borderRadius?: string
    $border?: string
    $hover?: boolean
}
const Button = styled.button<StButtonType>`
  position: ${({$position}) => $position};
  top: ${({$top}) => $top};
  right: ${({$right}) => $right};
  background: ${({$bgColor}) => $bgColor};
  color: ${({$color}) => $color};
  width: ${({$width}) => $width};
  height: ${({$height}) => $height};
  border: ${({$border}) => $border};
  border-radius: ${({$borderRadius}) => $borderRadius};
  cursor: pointer;
  ${({$hover})=> $hover && css`
    &:hover{
      border: 0;
      box-shadow: inset 0 0 2px 2px black;
    }
  `}
`

export const S = {Button}