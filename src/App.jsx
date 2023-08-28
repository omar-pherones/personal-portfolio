import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Socials from './components/Socials';
import { useSmothScroll } from './hooks/useSmothScroll';
import { CustomCursor } from './components/CustomCursor';
import { useRef } from 'react';
const App = () => {
    const innerCursor = useRef(null);
    const outerCursor = useRef(null);
    useSmothScroll();
    return (
        <div className="app">
            <CustomCursor innerCursor={innerCursor} outerCursor={outerCursor} />
            <div className="noise"></div>
            <Navbar />
            <Socials />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Navbar footerName />
            <Footer />
        </div>
    );
};

export default App;
