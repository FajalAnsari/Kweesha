import Navbar from './components/common/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/common/Footer';
import AboutData from './components/ReadMorePage/AboutUsPage/AboutData';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import SolutionsPage from './components/ReadMorePage/SolutionsPage/SolutionsPage';
import CareerData from './components/ReadMorePage/CareerDataPage/CareerData';
import DefaultPage from './components/DefaultPage/DefaultPage';
import TermCondition from './components/TermCondition/TermCondition';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Contact_us from './components/contact_us/Contact_us';

function App() {
  return (
  <Router>
    <Navbar />
           
     <Routes> 
      <Route path="/" element={<Hero />} />
      <Route path="/about_data" element={<AboutData />} />
      <Route path="/solutions_data" element={<SolutionsPage />} />
      <Route path="/career_data" element={<CareerData />} />
      <Route path="/about" element={<AboutData />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/careers" element={<CareerData />} />
      <Route path="/terms_condition" element={<TermCondition />} />
      <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/contact" element={<Contact_us />} />
      <Route path='/*' element={<DefaultPage />} />
    </Routes>
     <Footer/>
  </Router>
  )
}

export default App;
