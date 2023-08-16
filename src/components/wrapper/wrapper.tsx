'use client'

import {Side_bar} from "@/components/side_bar/side_bar";
import styled from "styled-components";


export const Wrapper = () =>{
    return (
        <Wrapperr>
            <Side_bar />
            <ContentWrapper>

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