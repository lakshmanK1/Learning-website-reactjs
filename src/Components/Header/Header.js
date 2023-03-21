import React from 'react'

import { HeaderDiv, LogoDiv, LogoSpanOne, LogoSpanTwo, TabsDiv, TabSpan } from './StyledHeader'

function Header({setIsLearning}) {
  return (
    <HeaderDiv>
        <LogoDiv onClick={()=>setIsLearning(false)}>
            <LogoSpanOne>Ed</LogoSpanOne>
            <LogoSpanTwo>Learn</LogoSpanTwo>
        </LogoDiv> 
        <TabsDiv>
            <TabSpan>About Us</TabSpan>
            <TabSpan>Contact Us</TabSpan>
        </TabsDiv>
    </HeaderDiv>
  )
}

export default Header