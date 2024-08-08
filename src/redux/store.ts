// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from '../redux/expenseSlice';

const store = configureStore({
  reducer: {
    expenses: expenseReducer,
  },
});

export default store;
