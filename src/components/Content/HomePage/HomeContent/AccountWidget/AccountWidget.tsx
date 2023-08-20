import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import styles from './AcountWidget.module.css'
import cardVisa from '../../../../../img/Card_Visa.svg'
import cardMaster from '../../../../../img/Card_Mastercard.svg'
import AmExpress  from '../../../../../img/American_Express.svg'
import {useAppSelector} from "@/hok/hoks";
import Image from "next/image";
import {S} from './acauntWidjet.style'



export const AccountWidget = () => {
    const wallets = useAppSelector(state=> state.wallets)



    const mappedWallets = wallets.map(el=> {
        const userName = `${el.user.name + " " + el.user.lastName}`
        return (
            <S.CardsWrapper key={el.idCard} >
                <S.Card>
                    <div className="title">{el.name}</div>
                    <div className="card-number">
                        <span>{el.numberCard}</span>
                    </div>
                    <div className="tutorial">
                        <p className="titleName">TUTORIAL</p>
                        <p className="userName">{userName.toUpperCase()}</p>
                    </div>
                    <div className="bootomCard">
                        <div className="date"><p>VANCE EL</p><p>03/23</p></div>
                        <div className="cvv"><p>CVV</p><p>***</p></div>
                        <div className="logoCard">
                            {
                                el.nameCard === 'MasterCard'
                                    ? <Image src={cardMaster}  alt={'imgCard'}/>
                                    : el.nameCard === 'Visa'
                                        ? <Image src={cardVisa}  alt={'imgCard'}/>
                                        : <Image src ={AmExpress} alt={'imgCard'}/>
                            }
                        </div>
                    </div>
                </S.Card>
            </S.CardsWrapper>
        )
            })

    return (
        <S.AccountWidgetWrapper>
            <AwesomeSlider cssModule={styles}>
                {React.Children.toArray(mappedWallets)}
            </AwesomeSlider>
        </S.AccountWidgetWrapper>
    );
};


