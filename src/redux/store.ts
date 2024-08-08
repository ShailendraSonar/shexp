// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from '../redux/expenseSlice';
import groupReducer from '../redux/groupSlice';
const store = configureStore({
  reducer: {
    expenses: expenseReducer,
    groups: groupReducer,
  },
});

export default store;
