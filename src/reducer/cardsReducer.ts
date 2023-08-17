import {v1} from "uuid";

export type CardsReducerType = {
    name: string
    idCard: string
    idUser: string
    type:string
    currency: string
    nameCard: string
    numberCard: string
    dateActive: string
    sumCard: number
    user:UserType
}
type UserType = {
    name: string
    lastName: string
}

const initialState = [
    {name: 'Wallet',idCard: v1(),idUser: v1(),type:'card',currency: 'BYN',nameCard: 'MasterCard', numberCard: '2345-****-****-7888',
        dateActive: '08/23', sumCard: 1400, user:{name: 'Egor', lastName: 'Belozerov'}},
    {name: 'Work Card',idCard: v1(),idUser: v1(),type:'cash',currency: 'USD',nameCard: 'Visa', numberCard: '111-****-****-2288', dateActive: '08/25', sumCard: 1400, user:{name: 'Roman', lastName: 'Shinkarenko'}},
    {name: 'Wallet',idCard: v1(),idUser: v1(),type:'bank',currency: 'RUB',nameCard: 'American_Express', numberCard: '2115-****-****-7822', dateActive: '04/23', sumCard: 1400, user:{name: 'Egor', lastName: 'Belozerov'}}
]

export const cardsReducer = (state:CardsReducerType[] = initialState, action:any)=>{
    switch (action.type) {
        case 'SSS':{
            return state
        }
        default: return state
    }
}