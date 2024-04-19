import { createSlice } from "@reduxjs/toolkit";

const todosFromStorage = JSON.parse(localStorage.getItem("todos")) || [];

const todosSlice = createSlice({
  name: "todos",
  initialState: todosFromStorage,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      console.log(action.payload);
      state = state.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    },

    updateTodo: (state, action) => {
      const { id, isCompleted } = action.payload;
      console.log(id, isCompleted);
      const todoToUpdate = state.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.isCompleted = isCompleted;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
