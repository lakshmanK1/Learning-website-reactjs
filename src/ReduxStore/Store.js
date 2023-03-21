import { configureStore } from "@reduxjs/toolkit";
import CodeSliceReducer from './CodesSlice'

const Store = configureStore({
    reducer:{CodeSnips:CodeSliceReducer}
});

export default Store;