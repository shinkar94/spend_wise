import React, {FC, memo} from 'react';
import {LineChartWithBoundaries} from "./LeftDiograms/LineChartWithBoundaries";
import {RightDiagrams} from "./RightDiagrams/RightDiagrams";
import {S} from './homeContent.style'

type PropsType = {
    totalOutcome: number
}

export const HomeContent:FC<PropsType> = memo((props) => {
    const {totalOutcome} = props
    return (
        <div>
            <S.TopContainer>
                <div className="block graf">
                    <LineChartWithBoundaries/>
                </div>
                <div className="block analitic">
                    <RightDiagrams totalOutcome={totalOutcome}/>
                </div>
            </S.TopContainer>
        </div>
    );
});
