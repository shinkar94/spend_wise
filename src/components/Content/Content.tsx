import React from 'react';
import styled from "styled-components";
import {HomePage} from "./HomePage/HomePage";

import {Navigate, Route, Routes} from 'react-router-dom';
import {Error404} from '../common/Error';
import {Calendar} from "../Calendar/Calendar";

type ContentType = {
    totalIncome: number
    totalOutcome: number
}

export const Content: React.FC<ContentType> = (props) => {
    const {totalIncome, totalOutcome} = props
    return (
        <StContent>
            <Main>
                <Routes>
                    <Route path={'/homepage'} element={<HomePage totalIncome={totalIncome} totalOutcome={totalOutcome}/>}/>
                    <Route path={'/calendar'} element={<Calendar/>}/>
                    <Route path={'/'} element={<Navigate to={'/homepage'}/>}/>
                    <Route path={'/*'} element={<Error404/>}/>
                </Routes>
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

