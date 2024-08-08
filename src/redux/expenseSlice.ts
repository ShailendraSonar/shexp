// src/redux/expenseSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Expense {
  id: number;
  description: string;
  amount: number;
  groupId: number;
}

interface GroupMember {
  id: number;
  name: string;
}

interface ExpenseState {
  expenses: Expense[];
  groups: { [key: number]: GroupMember[] };
}

const initialState: ExpenseState = {
  expenses: [],
  groups: {
    1: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }],
    2: [{ id: 3, name: 'John' }, { id: 4, name: 'Jane' }],
  },
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<{ description: string; amount: number; groupId: number }>) => {
      const { description, amount, groupId } = action.payload;
      state.expenses.push({
        id: state.expenses.length + 1,
        description,
        amount,
        groupId,
      });
    },
    splitExpense: (state, action: PayloadAction<number>) => {
      const expenseId = action.payload;
      const expense = state.expenses.find(e => e.id === expenseId);
      if (expense) {
        const groupMembers = state.groups[expense.groupId];
        const amountPerMember = expense.amount / groupMembers.length;
        console.log(`Each member should pay ${amountPerMember}`);
        // Logic to update each member's share can be added here
      }
    },
  },
});

export const { addExpense, splitExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
