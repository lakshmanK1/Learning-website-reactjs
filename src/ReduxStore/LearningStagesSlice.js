import { createSlice } from "@reduxjs/toolkit";

const Tabs = [
    {id:1, title:'Basics', activeCol:'#38E54D'}, {id:2, title:'Programming Language', activeCol:'#38E54D'},
    {id:3, title:'DSA', activeCol:'#38E54D'}, {id:4, title:'Simple Program', activeCol:'#38E54D'}, {id:5, title:'Complex Program', activeCol:'#38E54D'}
];

const LearningStagesSlice = createSlice({
    name:'LaerninStage',
    initialState:{
        Stages:Tabs
    }
})

export default LearningStagesSlice.reducer;