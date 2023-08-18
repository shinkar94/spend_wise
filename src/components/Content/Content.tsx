import React from 'react';
import styled from "styled-components";
import {HomePage} from "./HomePage/HomePage";

type ContentType = {
    totalIncome: number
    totalOutcome: number
}

export const Content: React.FC<ContentType> = (props) => {
    const {totalIncome, totalOutcome} = props
    return (
        <StContent>
            <Main>
                <HomePage totalIncome={totalIncome} totalOutcome={totalOutcome}/>
            </Main>
        </StContent>
    );
};

const StContent = styled.div`
  width: calc(100vw - 130px);
  background: #222131;
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

