
import Navbar from './components/common/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/common/Footer';
// import Leave_us from "./components/Contect_Us/Leave_us";

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home_page/Home';
import Read_more from './components/Read_more_page/Read_more';
function App() {
  return (
    <Router>
         <div className="App">
         
      <Routes>

 
      <Route path="/" element={<Home />}/>
      <Route path="read" element={<Read_more />}/>
      <Route path="/hero" element={<Hero />} />

 
    </Routes>
    </div>
    </Router>
  )
}

export default App;
