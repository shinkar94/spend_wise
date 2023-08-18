import React from 'react';
import styled from 'styled-components';
import {TopCard} from "../../TopCard/TopCard";
import {useAppSelector} from "@/hok/hoks";
import {HelperState} from "@/selectors/Selectors";


type HomePageType = {
    totalOutcome: number
    totalIncome: number
}

export const HomePage: React.FC<HomePageType> = ({totalOutcome,totalIncome}) => {
    const helper = useAppSelector(HelperState)
    return (
        <HomePageWrapper>
            <TopCard totalOutcome={totalOutcome} totalIncome={totalIncome}/>
            {(helper.statusAddBtn || helper.statusBarBtn) && <div className="shadowBlock"></div> }
        </HomePageWrapper>
    );
};

const HomePageWrapper = styled.div`
  padding: 0;
  .shadowBlock {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.36); 
    backdrop-filter: blur(2px);
  }
`

