import { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const link1Ref = useRef(null);
    const link2Ref = useRef(null);
    const link3Ref = useRef(null);
    const link4Ref = useRef(null);
    const link5Ref = useRef(null);
    const link6Ref = useRef(null);
    const link7Ref = useRef(null);
    return (
        <nav
            className={`flex justify-between container mx-auto mt-20 uppercase`}
        >
            <div className="logo">
                <HashLink smooth to="#home" className="link" ref={link1Ref}>
                    Md. Omar Faruk
                </HashLink>
            </div>
            <ul className="links flex flex-col gap-3">
                <li>
                    <HashLink smooth to="#home" className="link" ref={link2Ref}>
                        Home
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        to="#projects"
                        className="link"
                        ref={link3Ref}
                    >
                        My Projects
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        to="#skills"
                        className="link"
                        ref={link4Ref}
                    >
                        My Skills
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        to="#about"
                        className="link"
                        ref={link5Ref}
                    >
                        About Me
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        to="#contact"
                        className="link"
                        ref={link6Ref}
                    >
                        Contact Me
                    </HashLink>
                </li>
                <li>
                    <a
                        href="https://drive.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                        ref={link7Ref}
                    >
                        Download My Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
