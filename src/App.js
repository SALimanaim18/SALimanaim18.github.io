import React from 'react';
import { HashRouter , Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectsPage from './pages/projects-page';
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from './context/ThemeContext';
import FloatingAvatar from './components/FloatingAvatar';
import CertificationsPage from './pages/CerificationsPage';
function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <Navbar />
              <FloatingAvatar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects-page" element={<ProjectsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
