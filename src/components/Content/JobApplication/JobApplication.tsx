import React from 'react';
import Image from "next/image";
import {S} from './jobApplicationStyle'

type JobApplicationType = {
    img: string
    value: number
    name: string
}

export const JobApplication:React.FC<JobApplicationType> = (props) => {
    const {img, value, name} = props
    return (
        <S.JobApp>
            <Image src={img} alt="img"/>
            <div className="descriptions">
                <h3>{value}</h3>
                <p>{name}</p>
            </div>
        </S.JobApp>
    );
};