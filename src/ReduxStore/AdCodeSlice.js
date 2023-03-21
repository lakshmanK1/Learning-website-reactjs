import { createSlice } from "@reduxjs/toolkit";
import { JavaReverse, CAReverse, CPlusPlusReverse, PythonReverse, JavscriptReverse } from "./AdCodeData";

const AdCodesSlice = createSlice({
    name:"Codes",
    initialState:{
        JavaPro:JavaReverse,
        CPro:CAReverse,
        CPlusPlusPro:CPlusPlusReverse,
        PythonPro:PythonReverse,
        JavascriptPro:JavscriptReverse
    }
})

export default AdCodesSlice.reducer