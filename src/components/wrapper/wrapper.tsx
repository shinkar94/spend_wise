'use client'

import {createGlobalStyle, css} from "styled-components";
import {Side_bar} from "@/components/side_bar/side_bar";
import {Content} from "@/components/Content/Content";
import {HelperType} from "@/reducer/helperReducer";
import {AllState, HelperState} from "@/selectors/Selectors";
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
    const state = useAppSelector(AllState)
    const sum = (type: string) => {
        return state.filter(item =>
            item.type === type).reduce((acc, el) =>
            acc + el.value, 0)
    }
    const totalIncome = sum('income')
    const totalOutcome = sum('outcome')
    return (
        <>
            <GlobalStyle helper={helper}/>
            <S.Wrapper>
                <Side_bar />
                <S.ContentWrapper>
                    <AddOperationForm />
                    <Content totalIncome={totalIncome} totalOutcome={totalOutcome}/>
                </S.ContentWrapper>
            </S.Wrapper>
        </>
    )
}
