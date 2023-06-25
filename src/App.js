
import Navbar from './components/common/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/common/Footer';
// import Leave_us from "./components/Contect_Us/Leave_us";
import About_data from './components/Read_more_page/About_us_page/About_data';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home_page/Home';

import Solutions_page from './components/Read_more_page/Solutions_page/Solutions_page';
import Career_data from './components/Read_more_page/Career_data_page/Career_data';
function App() {
  return (
    <Router>
         <div className="App">
         
      <Routes>

 
      <Route path="/" element={<Home />}/>
      
      <Route path="/hero" element={<Hero />} />
      <Route path="/about_data" element={<About_data />} />
      <Route path="/solutions_data" element={<Solutions_page />} />
      <Route path="/career_data" element={<Career_data />} />

    
    </Routes>
    </div>
    </Router>
  )
}

export default App;
