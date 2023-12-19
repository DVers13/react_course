import style from './App.module.css'
import Header from './components/Header/Header';
import NavBar from "./components/NavBar/NavBar"
import OurServices from "./components/OurServices/OurServices"
import Leading from './components/Leading/Leading';
import Download from './components/Download/Download';
import Slider from './components/Slider/Slider';
import Check from './components/Check/Check';
import Footer from './components/Footer/Footer';


function App() {


  return (
    <div className='App'>
      <div className={style.container}>
      <NavBar/>
      <Header/>
      <OurServices/>
      <Leading/>
      <Download/>
      <Slider/>
      <Check/>
      <Footer/>
      </div>
    </div>
  );
}

export default App
