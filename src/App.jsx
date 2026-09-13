import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import Work from './pages/Work.jsx';
import About from './pages/About.jsx';
import Project from './pages/Project.jsx';

function App() {
    return (
        <div className="min-h-screen bg-[#f5f3ee] text-[#111111]">
            <Navigation />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/work/:slug" element={<Project />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
