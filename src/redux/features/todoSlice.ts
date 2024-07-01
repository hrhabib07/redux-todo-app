import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type TTodo = {
    title: string,
    id: string,
    description: string,
    isCompleted?: boolean
}

type TInitialState = {
    todos: TTodo[]
}

// Define the initial state using that type
const initialState: TInitialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push({ ...action.payload, isCompleted: false })
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(item => item.id !== action.payload)

        },
        toggleIsCompleteState: (state, action: PayloadAction<string>) => {
            const task = state.todos.find(item => item.id === action.payload);
            task!.isCompleted = !task?.isCompleted;
            state.todos = state.todos.filter(item => item.id !== action.payload);
            state.todos.push(task!)

        },
    },
});

export const { addTodo, removeTodo, toggleIsCompleteState } = todoSlice.actions;

export default todoSlice.reducer;