import React,{useState} from 'react'
import C from '../ProgramLanguages/C'
import CPlusPlus from '../ProgramLanguages/CPlusPlus'
import Java from '../ProgramLanguages/Java'
import JavaScript from '../ProgramLanguages/JavaScript'
import Python from '../ProgramLanguages/Python'
import LanguaOptions from './LanguaOptions'
function Programming() {
const [preferLang, setPreferLang] = useState("");

  const switchLangOptions = (tab) => {
    switch(tab){
      case "Java":
        return <Java/>;
      
      case "C":
        return <C/>;
        
      case "C++":
        return <CPlusPlus/>;
        
      case "Python":
        return <Python/>
        
      case "JavaScript":
        return <JavaScript/>  
    }
  }

  return (
    <div>
      <LanguaOptions preferLang={preferLang} setPreferLang={setPreferLang}/>
      {switchLangOptions(preferLang)}
    </div>
  )
}

export default Programming