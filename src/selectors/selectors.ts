import {RootState} from "@/store/store";


export const WalletSelector = (state:RootState)=> state.wallets
export const AllState = (state:RootState)=> state.allState
export const HelperState = (state:RootState)=> state.helper