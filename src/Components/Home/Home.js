import React from 'react'
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';

import { HomeDiv, HR } from './StyledHome';

function Home() {
  return (
    <HomeDiv>
        <Header/>
        <HR/>
        <Welcome/>
    </HomeDiv>
  )
}

export default Home