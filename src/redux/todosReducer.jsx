import { createSlice } from "@reduxjs/toolkit";
import { todos } from "../data";

const todosSlice = createSlice({
  name: "todos",
  initialState: todos,
  reducers: {},
});

export default todosSlice.reducer;
