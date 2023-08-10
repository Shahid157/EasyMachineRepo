import {createSlice} from '@reduxjs/toolkit';

const fieldDataSlice = createSlice({
  name: 'fieldDataSlice',
  initialState: [],
  reducers: {
    addFieldData(state: any, action: any) {
      state.push(action.payload);
    },
    removeFieldData(state: any, action: any) {
      return state.filter(
        (item: any, index: number) => index !== action.payload,
      );
    },
  },
});
export const {addFieldData, removeFieldData} = fieldDataSlice.actions;
export default fieldDataSlice.reducer;
