import { HashLink } from 'react-router-hash-link';
import { useRef } from 'react';

const Footer = () => {
    const footerRef = useRef(null);
    return (
        <footer className="my-40 text-center text-white/50 overflow-hidden">
            <p ref={footerRef}>
                &copy; {new Date().getFullYear()}{' '}
                <HashLink
                    smooth
                    to="#home"
                    className="link hover:text-white duration-500"
                >
                    Md. Omar Faruk
                </HashLink>
                . Crafted by yours truly
            </p>
        </footer>
    );
};

export default Footer;
