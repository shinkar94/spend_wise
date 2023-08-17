export type HelperType = {
    statusBarBtn: boolean
    statusAddBtn: boolean
}

const initialState: HelperType = {
    statusBarBtn: false,
    statusAddBtn: false,
}

export const helperReducer = (state = initialState, action: ActionType): HelperType => {
    switch (action.type) {
        case 'ONBLUR': {
            const status = action.payload.status
            return status === 'sideBarBtn'
                ? {...state, statusBarBtn: !state.statusBarBtn}
                : {...state, statusAddBtn: !state.statusAddBtn}
        }
        default:
            return state
    }
}

type ActionType = OnBlurACType


type OnBlurACType = ReturnType<typeof onBlurAC>

export const onBlurAC = (status: string) => {
    return {
        type: "ONBLUR",
        payload: {
            status
        }
    } as const
}