import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
})

export default todoSlice.reducer;