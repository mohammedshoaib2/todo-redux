import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  todos: [],

  totalTodos: 0,
  completedTodos: 0,
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: initialData,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
      state.totalTodos = state.todos.length;
      state.completedTodos = state.todos.filter((todo) => {
        return todo.isCompleted;
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
      state.totalTodos = state.todos.length;
      state.completedTodos = state.todos.filter((todo) => {
        return todo.isCompleted;
      });
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      state.completedTodos = state.todos.filter((todo) => {
        return todo.isCompleted;
      });
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
