import {createSlice} from '@reduxjs/toolkit';

const catgoryDataSlice = createSlice({
  name: 'catgoryDataSlice',
  initialState: [],
  reducers: {
    addCategoryData(state: any, action: any) {
      state.push(action.payload);
    },
    removeCategoryData(state: any, action: any) {
      return state.filter(
        (item: any, index: number) => index !== action.payload,
      );
    },
    filterCategoryData(state: any, action: any) {
      return state.filter(
        (item: any, index: number) => index !== action.payload,
      );
    },
  },
});
export const {addCategoryData, removeCategoryData, filterCategoryData} =
  catgoryDataSlice.actions;
export default catgoryDataSlice.reducer;
