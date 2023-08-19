import React from 'react';
import {TopCard} from "../../TopCard/TopCard";
import {useAppSelector} from "@/hok/hoks";
import {HelperState} from "@/selectors/Selectors";
import {HomeContent} from "@/components/Content/HomePage/HomeContent/HomeContent";
import {S} from './homePage.style'

type HomePageType = {
    totalOutcome: number
    totalIncome: number
}

export const HomePage: React.FC<HomePageType> = ({totalOutcome,totalIncome}) => {
    const helper = useAppSelector(HelperState)
    return (
        <S.HomePageWrapper>
            <TopCard totalOutcome={totalOutcome} totalIncome={totalIncome}/>
            <HomeContent totalOutcome={totalOutcome} />
            {(helper.statusAddBtn || helper.statusBarBtn) && <div className="shadowBlock"></div> }
        </S.HomePageWrapper>
    );
};


