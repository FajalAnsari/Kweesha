
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

 
    </Routes>
    </div>
    </Router>
  );
}

export default App;
