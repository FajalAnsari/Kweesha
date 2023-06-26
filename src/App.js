import Navbar from './components/common/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/common/Footer';
import About_data from './components/Read_more_page/About_us_page/About_data';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Solutions_page from './components/Read_more_page/Solutions_page/Solutions_page';
import Career_data from './components/Read_more_page/Career_data_page/Career_data';
import Default_page from './components/Default_page/Default_page';

function App() {
  return (
  <Router>
    <Navbar />        
     <Routes> 
      {/* jkd */}
      <Route path="/" element={<Hero />} />
      <Route path="/about_data" element={<About_data />} />
      <Route path="/solutions_data" element={<Solutions_page />} />
      <Route path="/career_data" element={<Career_data />} />
      <Route path='/*' element={<Default_page />} />
      <Route path="/about" element={<About_data />} />
      <Route path="/solutions" element={<Solutions_page />} />
      <Route path="/careers" element={<Career_data />} />
    </Routes>
     <Footer/>
  </Router>
  )
}

export default App;
