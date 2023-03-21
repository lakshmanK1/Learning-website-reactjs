import { configureStore } from "@reduxjs/toolkit";
import CodeSliceReducer from './CodesSlice'
import AdCodeSliceReducer from './AdCodeSlice'
import LearningStagesSliceReducer from './LearningStagesSlice'

const Store = configureStore({
    reducer:{CodeSnips:CodeSliceReducer, AdCodeSnips:AdCodeSliceReducer,
    LearnStages:LearningStagesSliceReducer}
});

export default Store;