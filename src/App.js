//Styles
import './App.scss'

//Components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Courses from './Components/Courses';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Courses />
      <AboutUs />
      <ContactUs />
    </>
  );
}

export default App;
