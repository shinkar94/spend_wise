import React from 'react';
import {S} from './rightDiagrams.style'
import {useSumTransactions} from "@/helper/sumResult";

export const RightDiagrams = () => {
    const outcome = useSumTransactions('outcome')
    return (
        <S.DiagramsWrapper>
            <div>
                <h3>Аналитика раходов</h3>
                <p>outcome = {outcome}</p>
            </div>
            <S.Diagram>

            </S.Diagram>
        </S.DiagramsWrapper>
    );
};










