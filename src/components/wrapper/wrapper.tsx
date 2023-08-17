'use client'

import styled from "styled-components";
import {Side_bar} from "@/components/side_bar/side_bar";


export const Wrapper = () =>{
    return (
        <Wrapperr>
            <Side_bar />
            <ContentWrapper>
                <h1>Welcome to Spend Wise Application </h1>
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