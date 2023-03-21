import React,{useState} from 'react'
import Learning from '../Learning/Learning';
import Welcome from '../Welcome/Welcome';
import { HomeDiv, HR } from './StyledHome';

function Home({isLearning, setIsLearning }) {
  return (
    <HomeDiv>
            {!isLearning && <Welcome setIsLearning={setIsLearning}/>}
            {isLearning && <Learning/>}
    </HomeDiv>
  )
}

export default Home