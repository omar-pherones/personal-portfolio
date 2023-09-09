import Hero from './Hero';
import Bio from './Bio';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <div className="home">
            <Hero />
            <Bio />
            <Projects />
            <Skills />
            <About />
            <Contact />
        </div>
    );
};

export default Home;
