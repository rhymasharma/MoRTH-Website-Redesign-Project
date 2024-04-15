import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Logos from './components/Logos';
import {BrowserRouter as Router} from "react-router-dom";
import License from './components/License.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <Router>
      <PreNavbar />
      <Logos />
      <Navbar />
      <Slider /> 
      <div className='blueBox'></div>  
      <License />
      <Footer />
    </Router>
  );
}

export default App;
