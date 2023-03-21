import { configureStore } from "@reduxjs/toolkit";
import CodeSliceReducer from './CodesSlice'
import AdCodeSliceReducer from './AdCodeSlice'

const Store = configureStore({
    reducer:{CodeSnips:CodeSliceReducer, AdCodeSnips:AdCodeSliceReducer}
});

export default Store;