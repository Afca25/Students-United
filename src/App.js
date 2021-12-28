//Styles
import './App.scss'

//Components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Courses from './Components/Courses';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Courses />
      <AboutUs />
    </>
  );
}

export default App;
