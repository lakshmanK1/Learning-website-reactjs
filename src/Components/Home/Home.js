import React,{useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import Learning from '../Learning/Learning';
import Welcome from '../Welcome/Welcome';

import { HomeDiv, HR } from './StyledHome';

function Home() {
    const [isLearning, setIsLearning] = useState(false);

    const toggleLearning = () => {
        setIsLearning(true);
    }

  return (
    <HomeDiv>
        <Routes>
            {!isLearning && <Route exact path='/' element={<Welcome learning={toggleLearning}/>}/>}
            {isLearning && <Route exact path='/learning' element={<Learning/>}/>}
        </Routes>
    </HomeDiv>
  )
}

export default Home