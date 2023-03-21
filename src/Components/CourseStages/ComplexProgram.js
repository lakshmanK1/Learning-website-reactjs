import React,{useState} from 'react'
import AllCodes from '../SampleCodes/CodeSnippets/AllCodes'
import CCode from '../SampleCodes/CodeSnippets/CCode';
import CPlusPlusCode from '../SampleCodes/CodeSnippets/CPlusPlusCode';
import JavaCode from '../SampleCodes/CodeSnippets/JavaCode';
import JSCode from '../SampleCodes/CodeSnippets/JSCode';
import PyCode from '../SampleCodes/CodeSnippets/PyCode';
import { ContentDiv, Header, Para, SubHeader } from './StyledCmp'

import { useSelector } from 'react-redux';
function ComplexProgram() {
  const [prefered, setPrefered] = useState('');

  const coding = useSelector(state => state.AdCodeSnips);

  const preferedLangua = (tab) => {
    switch(tab){
      case "Java":
        return <JavaCode coding={coding}/>

      case "C":
        return <CCode coding={coding}/>
        
      case "C++":
        return <CPlusPlusCode coding={coding}/>
        
      case "Python":
        return <PyCode coding={coding}/>
        
      case "Javascript":
        return <JSCode coding={coding}/>  
    }
  }

  return (
    <div>
      <Header>Complex Programming code</Header>
      <ContentDiv>
        <SubHeader>In this program, you will learn to reverse elements in an array.</SubHeader>
        <Para>Please select your preferred language.</Para>
        <AllCodes prefered={prefered} setPrefered={setPrefered}/>
        {preferedLangua(prefered)}
      </ContentDiv>
    </div>
  )
}

export default ComplexProgram