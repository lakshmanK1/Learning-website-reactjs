import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';

import { HomeDiv, HR } from './StyledHome';

function Home() {
  return (
    <HomeDiv>
        <Header/>
        <HR/>
        <Welcome/>
        <Footer/>
    </HomeDiv>
  )
}

export default Home