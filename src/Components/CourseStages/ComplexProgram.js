import React,{useState} from 'react'
import AllCodes from '../SampleCodes/CodeSnippets/AllCodes'
import CCode from '../SampleCodes/CodeSnippets/CCode';
import CPlusPlusCode from '../SampleCodes/CodeSnippets/CPlusPlusCode';
import JavaCode from '../SampleCodes/CodeSnippets/JavaCode';
import JSCode from '../SampleCodes/CodeSnippets/JSCode';
import PyCode from '../SampleCodes/CodeSnippets/PyCode';
import { ContentDiv, Header, Para, SubHeader } from './StyledCmp'

function ComplexProgram() {
  const [prefered, setPrefered] = useState('');

  const preferedLangua = (tab) => {
    switch(tab){
      case "Java":
        return <JavaCode/>

      case "C":
        return <CCode/>
        
      case "C++":
        return <CPlusPlusCode/>
        
      case "Python":
        return <PyCode/>
        
      case "Javascript":
        return <JSCode/>  
    }
  }
  return (
    <div>
      <Header>Complex Programming code</Header>
      <ContentDiv>
        <SubHeader>In this program, you will learn to reverse elements in an array.</SubHeader>
        <Para>Please select your preferred language.</Para>
        <AllCodes/>
      </ContentDiv>
    </div>
  )
}

export default ComplexProgram