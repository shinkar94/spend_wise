import React, {FC} from 'react';
import {JobApplication} from "../Content/JobApplication/JobApplication";
import walletIcon from "../../img/wallet.svg";
import incomeIcon from "../../img/income.svg";
import outcomeIcon from "../../img/outcome.svg";
import pigIcon from "../../img/pig.svg";
import styled from "styled-components";


type PropsType = {
    totalIncome: number
    totalOutcome: number
}
export const TopCard: FC<PropsType> = (props) => {
    const {totalIncome, totalOutcome} = props

    return (
        <TopAnalyticsCard>
            <JobApplication img={walletIcon} value={totalIncome - totalOutcome} name={"Balance"}/>
            <JobApplication img={incomeIcon} value={totalIncome} name={"income"}/>
            <JobApplication img={outcomeIcon} value={totalOutcome} name={"outcome"}/>
            <JobApplication img={pigIcon} value={10} name={"zanachka"}/>
        </TopAnalyticsCard>
    );
};

const TopAnalyticsCard = styled.div`
  margin-bottom: 20px;
  color: white;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
`