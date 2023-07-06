import Navbar from './components/common/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/common/Footer';
import About_data from './components/Read_more_page/About_us_page/About_data';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Solutions_page from './components/Read_more_page/Solutions_page/Solutions_page';
import Career_data from './components/Read_more_page/Career_data_page/Career_data';
import Default_page from './components/Default_page/Default_page';
import Term_condition from './components/Term_condition/Term_condition';
import Privacy_policy from './components/Privacy_policy/Privacy_policy';

function App() {
  return (
  <Router>
    <Navbar />
           
     <Routes> 
      <Route path="/" element={<Hero />} />
      <Route path="/about_data" element={<About_data />} />
      <Route path="/solutions_data" element={<Solutions_page />} />
      <Route path="/career_data" element={<Career_data />} />
      <Route path="/about" element={<About_data />} />
      <Route path="/solutions" element={<Solutions_page />} />
      <Route path="/careers" element={<Career_data />} />
      <Route path="/terms_condition" element={<Term_condition />} />
      <Route path="/privacy_policy" element={<Privacy_policy />} />
      <Route path='/*' element={<Default_page />} />
    </Routes>
     <Footer/>
  </Router>
  )
}

export default App;
