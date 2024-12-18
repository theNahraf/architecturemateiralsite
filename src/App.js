import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Gallery  from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import DirectorPage from './pages/DirectorPage';
import Error from './pages/Error';
import Chatbot from './Components/Chatbot';

function App() {
  return (
    <div className="w-[100vw] h-screen overflow-auto scrollbar-hide bg-gradient-radial from-white to-[#2e77f5] app-container">
      <Navbar />
      <div className="pt-[8vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/director_page" element={<DirectorPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Chatbot/>
      </div>
    </div>
  );
}


export default App;


