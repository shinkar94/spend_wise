'use client'

import styled, {createGlobalStyle, css} from "styled-components";
import {Side_bar} from "@/components/side_bar/side_bar";
import {Content} from "@/components/Content/Content";
import {HelperType} from "@/reducer/helperReducer";
import {AllState, HelperState} from "@/selectors/Selectors";
import {AddOperationForm} from "@/components/AddOperationForm/AddOperationForm";
import {useAppSelector} from "@/hok/hoks";

const GlobalStyle = createGlobalStyle<{ helper: HelperType }>`
  body {
  ${({helper})=> (helper.statusBarBtn || helper.statusAddBtn) && css`
    overflow: hidden;
  `}
    
  }
`
export const Wrapper = () =>{
    hoks(HelperState);
    const state = useAppSelector(AllState)
    const sum = (type: string) => {
        return state.filter(item =>
            item.type === type).reduce((acc, el) =>
            acc + el.value, 0)
    }
    return (
        <Wrapperr>
            <Side_bar />
            <ContentWrapper>
                <AddOperationForm />
                <Content totalIncome={sum('income')} totalOutcome={sum('outcome')}/>
            </ContentWrapper>
        </Wrapperr>
    )
}

const Wrapperr = styled.div`
  height: 100vh;
  //background: red;
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
`

const ContentWrapper = styled.div`

`