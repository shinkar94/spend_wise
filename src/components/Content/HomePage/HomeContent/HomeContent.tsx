import React from 'react';
import {LeftDiagrams} from "./LeftDiograms/LeftDiagrams";
import {RightDiagrams} from "./RightDiagrams/RightDiagrams";
import {S} from './homeContent.style'
import {TableOperations} from "@/components/Content/HomePage/HomeContent/TableOperations/TableOperations";
import {AccountWidget} from "@/components/Content/HomePage/HomeContent/AccountWidget/AccountWidget";

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
            <S.BottomContainer>
                <TableOperations />
                <AccountWidget />
            </S.BottomContainer>
        </div>
    );
};
