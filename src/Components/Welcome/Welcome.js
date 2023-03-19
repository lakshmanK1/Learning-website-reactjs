import React from 'react'

import { Button, ButtonDiv, Text, TextDiv, Title, WelcomeDiv } from './StyledWelcome'
import { Link } from 'react-router-dom';
function Welcome({learning}) {
  return (
    <WelcomeDiv>
         <TextDiv>
            <Title>Welcome to Ed Learn!</Title>
            <Text>Ed Learn is a freemium educational website for learning coding online.</Text>
         </TextDiv>
         <ButtonDiv>
            <Link to='/learning'><Button onClick={learning}>Start Learning!</Button></Link>
         </ButtonDiv>
    </WelcomeDiv>
  );
}

export default Welcome