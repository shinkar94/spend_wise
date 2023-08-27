'use client'

import {createGlobalStyle, css} from "styled-components";
import {Content} from "@/components/Content/Content";
import {HelperType} from "@/reducer/helperReducer";
import {HelperState} from "@/selectors/Selectors";
import {AddOperationForm} from "@/components/AddOperationForm/AddOperationForm";
import {useAppSelector} from "@/hok/hoks";
import {S} from './wrapperStyle'

const GlobalStyle = createGlobalStyle<{ helper: HelperType }>`
  body {
  ${({helper})=> (helper.statusBarBtn || helper.statusAddBtn) && css`
    overflow: hidden;
  `}
    
  }
`
export const Wrapper = () =>{
    const helper = useAppSelector(HelperState);
    return (
        <>
            <GlobalStyle helper={helper}/>
            <S.Wrapper>
                <S.ContentWrapper>
                    <AddOperationForm />
                    <Content />
                </S.ContentWrapper>
            </S.Wrapper>
        </>
    )
}
