import React from 'react'

import { Button, ButtonDiv, Text, TextDiv, Title, WelcomeDiv } from './StyledWelcome'
function Welcome({setIsLearning}) {
  return (
    <WelcomeDiv>
         <TextDiv>
            <Title>Welcome to Ed Learn!</Title>
            <Text>Ed Learn is a freemium educational website for learning coding online.</Text>
         </TextDiv>
         <ButtonDiv>
            <Button onClick={()=>setIsLearning(true)}>Start Learning!</Button>
         </ButtonDiv>
    </WelcomeDiv>
  );
}

export default Welcome