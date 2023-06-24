import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/common/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/common/Footer';
// import Leave_us from "./components/Contect_Us/Leave_us";

function App() {
  return (
    <>
       <Router>
        <Navbar />
         <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/leave_us" element={<Leave_us />} /> */}
         </Routes>
         <Footer />
       </Router>
    </>
  );
}

export default App;
