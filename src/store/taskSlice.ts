import { Task } from '../types'
import { createSlice } from '@reduxjs/toolkit'

const defaultTaskState: Task[] = []

const taskSlice = createSlice({
    name: 'task',
    initialState: defaultTaskState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        editTask: (state, action) => {
            const currentTaskIndex = state.findIndex(
                (elem) => elem.id === action.payload.id
            )
            state[currentTaskIndex].title = action.payload.title
        },
        deleteTask: (state, action) => {
            const currentTaskIndex = state.findIndex(
                (elem) => elem.id === action.payload.id
            )
            state.splice(currentTaskIndex, 1)
        },
    },
})

export const { addTask, editTask, deleteTask } = taskSlice.actions // ?
export default taskSlice.reducer // ?
