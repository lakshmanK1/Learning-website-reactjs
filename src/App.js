import React,{useState} from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { HR } from './Components/Home/StyledHome';

function App() {
  const [isLearning, setIsLearning] = useState(false);

  return (
    <div>
      <Header setIsLearning={setIsLearning}/>
      <HR/>
      <Home isLearning={isLearning} setIsLearning={setIsLearning}/>
      <Footer/>
    </div>
  );
}

export default App;
