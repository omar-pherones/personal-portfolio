import { useRef } from 'react';
import { useHoverEffect } from '../hooks/useHoverEffect';
import { useImageRevele, useHeadlineReveal } from '../hooks/gsap';
const data = {
    img1: 'https://res.cloudinary.com/dvuyhxzav/image/upload/v1693065678/react-portfolio-image/hero-image-2_2_vow2kc.jpg',
    img2: 'https://res.cloudinary.com/dvuyhxzav/image/upload/v1693067121/react-portfolio-image/2023_08_11_11_30_DEFE9F56-B5F6-49B5-92FE-8593E25D0E75_2_dfbmuu.png',
};
const Hero = () => {
    const heroImageRef = useRef(null);
    const heroHeadline1Ref = useRef(null);
    const heroHeadline2Ref = useRef(null);
    const headlines = [heroHeadline1Ref, heroHeadline2Ref];

    useHoverEffect(heroImageRef, data.img1, data.img2);
    useHeadlineReveal(headlines, 1.5);
    useImageRevele(heroImageRef);
    return (
        <div
            className="hero container mx-auto mt-20 flex items-center justify-center overflow-hidden"
            id="home"
        >
            <div className="hero-image" ref={heroImageRef}></div>
            <div className="shutter shutter-left overflow-hidden">
                <h1 ref={heroHeadline1Ref}>ReactJS</h1>
            </div>
            <div className="shutter shutter-right overflow-hidden">
                <h1 ref={heroHeadline2Ref}>Developer</h1>
            </div>
            <div className="circle-left"></div>
            <div className="circle-right"></div>
        </div>
    );
};

export default Hero;
