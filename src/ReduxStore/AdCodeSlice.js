import { createSlice } from "@reduxjs/toolkit";

const AdCodesSlice = createSlice({
    name:"Codes",
    initialState:{
        AdJavaPro:JavaAddition,
        AdCPro:CAddition,
        AdCPlusPlusPro:CPlusPlusAddition,
        AdPythonPro:PythonAddition,
        AdJavascriptPro:JavscriptAddition
    }
})

export default AdCodesSlice.reducer