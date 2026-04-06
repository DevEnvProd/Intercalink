import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Directory } from './pages/Directory';
import { CasinoDetail } from './pages/CasinoDetail';
import { Bonuses } from './pages/Bonuses';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { SubmitLink } from './pages/SubmitLink';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/casino/:id" element={<CasinoDetail />} />
            <Route path="/bonuses" element={<Bonuses />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/submit" element={<SubmitLink />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
