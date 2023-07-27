import { Card } from '../types'
import { createSlice } from '@reduxjs/toolkit'

const defaultCardState: Card[] = []

const cardSlice = createSlice({
    name: 'card',
    initialState: defaultCardState,
    reducers: {
        addCard: (state, action) => {
            state.push(action.payload)
        },
        deleteCard: (state, action) => {
            const currentCardID = state.findIndex(
                (elem) => elem.id === action.payload.id
            )
            state.splice(currentCardID, 1)
        },
    },
})

export const { addCard, deleteCard } = cardSlice.actions // ?
export default cardSlice.reducer // ?
