import React, {FC, memo} from 'react';
import {LeftDiagrams} from "./LeftDiograms/LeftDiagrams";
import {RightDiagrams} from "./RightDiagrams/RightDiagrams";
import {S} from './homeContent.style'

type PropsType = {
    totalOutcome: number
}

export const HomeContent:FC<PropsType> = (props) => {
    const {totalOutcome} = props
    return (
        <div>
            <S.TopContainer>
                <div className="block graf">
                    <LeftDiagrams/>
                </div>
                <div className="block analitic">
                    <RightDiagrams totalOutcome={totalOutcome}/>
                </div>
            </S.TopContainer>
        </div>
    );
};
