import React, {FC} from 'react';
import {S} from './rightDiagrams.style'

type RightType = {
    totalOutcome: number
}

export const RightDiagrams: FC<RightType> = ({totalOutcome}) => {

    return (
        <S.DiagramsWrapper>
            <div>
                <h3>Аналитика раходов</h3>
            </div>
            <S.Diagram>

            </S.Diagram>
        </S.DiagramsWrapper>
    );
};










