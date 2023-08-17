import {RootState, store} from "@/store/store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";



export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector