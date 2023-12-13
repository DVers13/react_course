import style from './App.module.css'
import Header from './components/Header/Header';
import NavBar from "./components/NavBar/NavBar"
import OurServices from "./components/OurServices/OurServices"
import Leading from './components/Leading/Leading';
import Download from './components/Download/Download';


function App() {


  return (
    <div className='App'>
      <div className={style.container}>
      <NavBar/>
      <Header/>
      <OurServices/>
      <Leading/>
      <Download/>
      </div>
    </div>
  );
}

export default App
