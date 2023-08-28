import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSmothScroll } from './hooks/useSmothScroll';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Socials from './components/Socials';
import { CustomCursor } from './components/CustomCursor';
import { useCustomCursor } from './hooks/useCustomCursor';
const App = () => {
    let innerCursor = useRef(null);
    let outerCursor = useRef(null);
    useSmothScroll();
    useCustomCursor(innerCursor, outerCursor);
    return (
        <div className="app">
            <div className="noise"></div>
            <CustomCursor innerCursor={innerCursor} outerCursor={outerCursor} />
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
