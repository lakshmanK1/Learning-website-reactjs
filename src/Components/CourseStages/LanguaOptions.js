import React from 'react'

import { LanguaOptionsDiv, ProLanguage, InnDiv } from './StyledCmp'
import { SubHeader } from './StyledCmp'
const LanguageList = [
    {id:1, title:"Java",color:'#38ed'},
    {id:2, title:"C",color:'#38ed'},
    {id:3, title:"C++",color:'#38ed'},
    {id:4, title:"Python",color:'#38ed'},
    {id:5, title:"JavaScript",color:'#38ed'},
]

function LanguaOptions({preferLang, setPreferLang}) {
  return (
    <LanguaOptionsDiv>
        <SubHeader>Please Select your Preffered Language</SubHeader>
        {
            LanguageList.map((data)=>(
                <InnDiv><ProLanguage key={data.id} style={{color:`${preferLang === data.title ? '#91091E' : ''}`}} onClick={()=>setPreferLang(data.title)}>{data.title}</ProLanguage><br /></InnDiv>
            ))
        }
    </LanguaOptionsDiv>
  )
}

export default LanguaOptions