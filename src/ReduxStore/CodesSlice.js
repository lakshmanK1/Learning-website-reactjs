import { createSlice } from "@reduxjs/toolkit";
import { JavaAddition,CAddition, CPlusPlusAddition, PythonAddition, JavscriptAddition } from "./CodeData";

const CodesSlice = createSlice({
    name:"Codes",
    initialState:{
        JavaPro:JavaAddition,
        CPro:CAddition,
        CPlusPlusPro:CPlusPlusAddition,
        PythonPro:PythonAddition,
        JavascriptPro:JavscriptAddition
    }
})

export default CodesSlice.reducer