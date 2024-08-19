import {InitialStateType} from "./CountReducer";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('stateValueCount');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: {count:InitialStateType }) => {
    const stateValueCount = {
        count: {
            maxValue: state.count.maxValue,
            minValue: state.count.minValue,
            count: state.count.minValue,
        }
    }
    try {
        localStorage.setItem('stateValueCount', JSON.stringify(stateValueCount));
    } catch {
        // ignore write errors
    }
};