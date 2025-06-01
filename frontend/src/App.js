

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Resources from './Pages/Resources';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Exams from './Pages/Exams';
import Home from './Pages/Home';
import PastExams from './Pages/PastExams';
import EnrollExams from './Pages/EnrollExams';
import Rewards from './Pages/Rewards';
import CheckResults from './Pages/CheckResults';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/past-exams" element={<PastExams />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/enroll-exams" element={<EnrollExams />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/check-results" element={<CheckResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
