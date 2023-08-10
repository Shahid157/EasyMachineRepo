import {combineReducers, configureStore} from '@reduxjs/toolkit';
import CategorySlicer from './CategorySlicer';
import FieldDataSlicer from './FieldDataSlicer';

const reducer = combineReducers({
  CategorySlicer,
  FieldDataSlicer,
});
const toolkitStore = configureStore({reducer});
export default toolkitStore;
