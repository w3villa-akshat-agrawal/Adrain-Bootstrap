import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ContactForm from './components/ContactForm';
import Home from './Home';

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>
    </Router>
  );
};

export default App;
