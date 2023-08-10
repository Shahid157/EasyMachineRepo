import {combineReducers, configureStore} from '@reduxjs/toolkit';
import CategorySlicer from './CategorySlicer';
import FieldDataSlicer from './FieldDataSlicer';
import CategoryDataSlicer from './CategoryDataSlicer';
const reducer = combineReducers({
  CategorySlicer,
  CategoryDataSlicer,
  FieldDataSlicer,
});
const toolkitStore = configureStore({reducer});
export default toolkitStore;
