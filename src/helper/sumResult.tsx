import {useAppSelector} from "@/hok/hoks";
import {AllState} from "@/selectors/Selectors";
export const useSumTransactions = (type: string) => {
    const state = useAppSelector(AllState)
    return state.filter(item =>
        item.type === type).reduce((acc, el) =>
        acc + el.value, 0)
}
