import './styles/global.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';
import { CookieBanner } from './components/ui/CookieBanner';

function HomePage() {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  );
}

export default App;
