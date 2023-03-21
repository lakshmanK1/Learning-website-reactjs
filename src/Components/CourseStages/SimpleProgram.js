import React, { useState } from 'react'
import CPlusPlusCode from '../SampleCodes/CodeSnippets/CPlusPlusCode';
import AllCodes from '../SampleCodes/CodeSnippets/AllCodes'
import CCode from '../SampleCodes/CodeSnippets/CCode';
import JavaCode from '../SampleCodes/CodeSnippets/JavaCode';

import { ContentDiv, Header, Para, SubHeader } from './StyledCmp'
import PyCode from '../SampleCodes/CodeSnippets/PyCode';
import JSCode from '../SampleCodes/CodeSnippets/JSCode';

import { useSelector } from 'react-redux'
function SimpleProgram() {
  const [prefered, setPrefered] = useState('');
  const coding = useSelector(state => state.CodeSnips);

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
      <Header>Simple Programming code</Header>
      <ContentDiv>
        <SubHeader>In this program, you will learn to addition two numbers.</SubHeader>
        <Para>Please select your preffered langauge:</Para>
        <AllCodes prefered={prefered} setPrefered={setPrefered}/>
        {preferedLangua(prefered)}
      </ContentDiv>
    </div>
  )
}

export default SimpleProgram