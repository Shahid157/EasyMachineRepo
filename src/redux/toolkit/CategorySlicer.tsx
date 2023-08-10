import {createSlice} from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: [],
  reducers: {
    addCategory(state: any, action: any) {
      state?.push(action.payload);
    },
    removeCategory(state: any, action: any) {
      return state?.filter(
        (item: any, index: number) => index !== action.payload,
      );
    },
  },
});
export const {addCategory, removeCategory} = categorySlice.actions;
export default categorySlice.reducer;
