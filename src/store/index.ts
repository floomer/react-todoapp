import {configureStore} from '@reduxjs/toolkit'
import taskReducer from "./taskSlice";
import cardReducer from './CardSlice'

export const store = configureStore({
    reducer: {
        task: taskReducer,
        card: cardReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch