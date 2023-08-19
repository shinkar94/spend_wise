import React from 'react';
import {LeftDiagrams} from "./LeftDiograms/LeftDiagrams";
import {RightDiagrams} from "./RightDiagrams/RightDiagrams";
import {S} from './homeContent.style'

export const HomeContent = () => {
    return (
        <div>
            <S.TopContainer>
                <div className="block graf">
                    <LeftDiagrams/>
                </div>
                <div className="block analitic">
                    <RightDiagrams />
                </div>
            </S.TopContainer>
        </div>
    );
};
