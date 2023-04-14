import { configureStore, createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    remove: (state, action) => {
      return state.filter((v) => v.id !== action.payload);
    },
  },
});

export const { add, remove } = toDos.actions;
export default configureStore({ reducer: toDos.reducer });
