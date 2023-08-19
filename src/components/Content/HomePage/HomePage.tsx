import React from 'react';
import {TopCard} from "../../TopCard/TopCard";
import {useAppSelector} from "@/hok/hoks";
import {HelperState} from "@/selectors/Selectors";
import {HomeContent} from "@/components/Content/HomePage/HomeContent/HomeContent";
import {S} from './homePage.style'

export const HomePage = () => {
    const helper = useAppSelector(HelperState)
    return (
        <S.HomePageWrapper>
            <TopCard />
            <HomeContent />
            {(helper.statusAddBtn || helper.statusBarBtn) && <div className="shadowBlock"></div> }
        </S.HomePageWrapper>
    );
};


