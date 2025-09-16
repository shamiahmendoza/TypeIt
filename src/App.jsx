import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './Home/home';
import Create from './Create/create';
import Generate from './Generate/generate';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/generate" element={<Generate />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
