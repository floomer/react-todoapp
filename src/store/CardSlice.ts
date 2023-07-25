import {Card} from "../types";
import {createSlice} from "@reduxjs/toolkit";


const defaultCardState:Card[] = []

const cardSlice = createSlice({
    name: 'card',
    initialState: defaultCardState,
    reducers:{
        addCard: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const {addCard} = cardSlice.actions // ?
export default cardSlice.reducer // ?