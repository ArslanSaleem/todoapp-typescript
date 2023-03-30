import { createStore } from "redux";
import todoReducers from "./rootReducer";

const store = createStore(todoReducers);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
