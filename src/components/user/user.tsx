'use client'
import {useAppSelector} from "@/hok/hoks";
import {authSelectors} from "@/selectors/Selectors";
import Image from "next/image";
import {S} from './userStyle'
import cardMaster from "@/img/Card_Mastercard.svg";
import cardVisa from "@/img/Card_Visa.svg";
import AmExpress from "@/img/American_Express.svg";
import React from "react";
import {AddCard} from "@/components/user/add-card/addCard";

export const UserPage = () => {
    const userData = useAppSelector(authSelectors)

    return (
        <S.Wrapper>
            <S.Content>
                <S.LeftContent>
                    <S.BlockAvatar>
                        {
                            userData.avatarUrl && <Image src={userData.avatarUrl} alt={'avatar'} width="80" height="80"/>
                        }
                    </S.BlockAvatar>
                    <S.BlockInfo>
                        <p>{userData.fullName}</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name card</th>
                                    <th>Last number</th>
                                    <th>Date</th>
                                    <th>Sum</th>
                                    <th>currency</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Image src={cardMaster} width='20' height='20' alt={'card'}/></td>
                                    <td>1212</td>
                                    <td>12.09.23</td>
                                    <td>12300</td>
                                    <td>BYN</td>
                                </tr>
                                <tr>
                                    <td><Image src={cardVisa} width='20' height='20' alt={'card'}/></td>
                                    <td>1212</td>
                                    <td>11.08.28</td>
                                    <td>10970</td>
                                    <td>USD</td>
                                </tr>
                                <tr>
                                    <td><Image src={AmExpress} width='20' height='20' alt={'card'}/></td>
                                    <td>1212</td>
                                    <td>12.09.23</td>
                                    <td>500</td>
                                    <td>EUR</td>
                                </tr>
                            </tbody>
                        </table>
                    </S.BlockInfo>
                </S.LeftContent>
                <S.BlockAddCard>
                    <AddCard />
                </S.BlockAddCard>
            </S.Content>
        </S.Wrapper>
    )
}