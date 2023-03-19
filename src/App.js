import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { HR } from './Components/Home/StyledHome';

function App() {
  return (
    <div>
      <Header/>
      <HR/>
      <div style={{height:'18rem'}}>
      <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
