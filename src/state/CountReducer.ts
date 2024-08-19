export type InitialStateType = {
    minValue: number
    maxValue: number
    count: number
}

let initialState: InitialStateType = {
    minValue: 0,
    maxValue: 0,
    count: 0,
}

export const CountReducer = (state: InitialStateType = initialState, action: CountReducerActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_INPUT_MAX': {
            return {...state, maxValue: action.payload.value}
        }
        case "SET_INPUT_MIN": {
            return {...state, minValue: action.payload.value}
        }
        case "COUNT_BUTTON": {
            return {...state, count: state.count + action.payload.num}
        }
        case "SET_COUNT_VALUE": {
            return {...state, count: action.payload.value}
        }
        case "REST_BUTTON": {
            return {...state, count: state.minValue}
        }
        default: return state
    }
}
type CountReducerActionType = setInputMaxACType
    | setInputMinACType
    | countButtonACType
    | restButtonACType
    | setCountValueACType

type setInputMaxACType = ReturnType<typeof setInputMaxAC>
type setInputMinACType = ReturnType<typeof setInputMinAC>
type countButtonACType = ReturnType<typeof countButtonAC>
type restButtonACType = ReturnType<typeof restButtonAC>
type setCountValueACType = ReturnType<typeof setCountValueAC>

export const setInputMaxAC = (value: number) => {
    return {
        type: 'SET_INPUT_MAX',
        payload: {
            value
        }
    } as const
}

export const setInputMinAC = (value: number) => {
    return {
        type: 'SET_INPUT_MIN',
        payload: {
            value
        }
    } as const
}

export const countButtonAC = (num: number) => {
    return {
        type: 'COUNT_BUTTON',
        payload: {
            num
        }
    } as const
}

export const setCountValueAC = (value: number) => {
    return {
        type: 'SET_COUNT_VALUE',
        payload: {
            value
        }
    } as const
}

export const restButtonAC = () => {
    return {
        type: 'REST_BUTTON'
    } as const
}