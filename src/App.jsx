import './App.css';
import GallaryFooter from './components/GallaryFooter';
import NavBar from './components/NavBar';
import Main from './components/Main';
import imageData from './components/Data';

function App() {
  return (
    <div>
      <NavBar/>
      {/* adding footer component */}
      <Main imageData={imageData}/>
      <GallaryFooter/> 
    </div>
  )
}

export default App;
