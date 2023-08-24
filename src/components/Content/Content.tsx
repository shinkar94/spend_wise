import React from 'react';
import styled from "styled-components";
import {HomePage} from "./HomePage/HomePage";

export const Content = () => {
    return (
        <StContent>
            <Main>
                <HomePage />
                Test#1
            </Main>
        </StContent>
    );
};

const StContent = styled.div`
  width: calc(100vw - 130px);
  padding:10px 50px;
`
const TopAnalyticsCard = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
`
const Main = styled.div`

`

