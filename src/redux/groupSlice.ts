import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Group {
  id: number;
  name: string;
  members: string[];
}

interface GroupState {
  groups: Group[];
}

const initialState: GroupState = {
  groups: [],
};

const groupSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    addGroup: (state, action: PayloadAction<{ name: string; members: string[] }>) => {
      const { name, members } = action.payload;
      state.groups.push({
        id: state.groups.length + 1,
        name,
        members,
      });
    },
  },
});

export const { addGroup } = groupSlice.actions;
export default groupSlice.reducer;
