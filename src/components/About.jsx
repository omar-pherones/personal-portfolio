import { useRef } from 'react';
import { useHoverEffect } from '../hooks/useHoverEffect';
import {
    useProjectLeftRightReaveal,
    useSectionTitleReveal,
} from '../hooks/gsap';
const data = {
    img1: 'https://res.cloudinary.com/dvuyhxzav/image/upload/v1693066011/react-portfolio-image/2023_07_03_15_02_IMG_0120_2_essx8v.jpg',
    img2: 'https://res.cloudinary.com/dvuyhxzav/image/upload/v1693066018/react-portfolio-image/2023_07_03_10_48_IMG_0116_2_xvo7lm.jpg',
};
const About = () => {
    const projectTitleRef = useRef(null);
    const aboutLeftRef = useRef(null);
    const aboutRightRef = useRef(null);
    const aboutSides = [aboutLeftRef, aboutRightRef];

    useHoverEffect(aboutLeftRef, data.img1, data.img2);
    useSectionTitleReveal(projectTitleRef);
    useProjectLeftRightReaveal(aboutSides);

    return (
        <div className="about container mx-auto mt-40" id="about">
            <div className="overflow-hidden">
                <h2 className="section-title" ref={projectTitleRef}>
                    About Me
                </h2>
            </div>
            <div className="about-wrapper mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-hidden">
                <div className="about-left" ref={aboutLeftRef}></div>
                <div className="about-right" ref={aboutRightRef}>
                    <p>
                        I'm a dedicated React.js Developer with a strong passion
                        for creating dynamic and engaging web applications.
                        Proficient in leveraging React, Redux, and Tailwind CSS
                        to build user-friendly interfaces and interactive
                        experiences. A dedicated fast learner who excels in
                        collaborating within cross-functional teams to deliver
                        high-quality code. A creative designer with a keen eye
                        for aesthetics, ensuring clean and visually appealing
                        designs.
                    </p>
                    <p className="mt-10">
                        My focus is on translating complex ideas into innovative
                        solutions that cater to the specific requirements of my
                        clients. Whether it's a straightforward website or a
                        sophisticated web application, I'm committed to
                        delivering work of the highest quality that consistently
                        surpasses expectations. What sets me apart is my keen
                        eye for UI design and my ability to bring interfaces to
                        life with captivating animations. I leverage the power
                        of the GreenSock Animation Platform (GSAP) library to
                        create dynamic and engaging user interfaces that leave a
                        lasting impact. My skills in creating smooth animations
                        and transitions enhance the overall user experience. I
                        develop visually appealing and functional web
                        applications that stand out in the market.
                    </p>
                    <a
                        href="https://drive.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-10 inline-block py-8 px-14 border uppercase rounded-full border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
                    >
                        View My Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
