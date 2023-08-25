import {S} from './addCardStyle'
import React from "react";
import {useAppSelector} from "@/hok/hoks";
import {authSelectors} from "@/selectors/Selectors";


export const AddCard = () => {
    const userData = useAppSelector(authSelectors)
    return(
        <S.CardsWrapper>
            <S.Card>
                <div className="title"><input type="text" placeholder={'Name card'}/></div>
                <div className="card-number">
                    <span>****-****-****-<input type={'text'} placeholder={'last 4 number'}/></span>
                </div>
                <div className="tutorial">
                    <p className="titleName">TUTORIAL</p>
                    <p className="userName"><input type="text" defaultValue={userData.fullName ? userData.fullName.toUpperCase() : 'No Name'}/></p>
                </div>
                <div className="bootomCard">
                    <div className="date"><p>VANCE EL</p><p><input type="date"/></p></div>
                    <div className="cvv"><p>CVV</p><p>***</p></div>
                    <div className="logoCard">
                        <select>
                            <option>Master Card</option>
                        </select>
                    </div>
                </div>
                <button>Add Card</button>
            </S.Card>
        </S.CardsWrapper>
    )
}