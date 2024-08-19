import {combineReducers, legacy_createStore as createStore} from "redux"
import {CountReducer} from "./CountReducer";
import { loadState, saveState } from "./LocalStorage";

const rootReducer = combineReducers({
    count: CountReducer
})
const persistedState = loadState();

export const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
    saveState(store.getState());
});

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store