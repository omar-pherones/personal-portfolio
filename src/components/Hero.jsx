import { useRef } from 'react';
import { useHoverEffect } from '../hooks/useHoverEffect';
const data = {
    img1: 'https://res.cloudinary.com/dvuyhxzav/image/upload/v1693065678/react-portfolio-image/hero-image-2_2_vow2kc.jpg',
    img2: 'https://res.cloudinary.com/dvuyhxzav/image/upload/v1693067121/react-portfolio-image/2023_08_24_21_26_EB2D18E6-06C8-425E-8C5E-384982119FDF_2_em1vi2.jpg',
};
const Hero = () => {
    const heroImageRef = useRef(null);
    useHoverEffect(heroImageRef, data.img1, data.img2);
    return (
        <div className="hero container mx-auto mt-20 flex items-center justify-center overflow-hidden">
            <div className="hero-image" ref={heroImageRef}></div>
            <div className="shutter shutter-left overflow-hidden">
                <h1>ReactJS</h1>
            </div>
            <div className="shutter shutter-right overflow-hidden">
                <h1>Developer</h1>
            </div>
            <div className="circle-left"></div>
            <div className="circle-right"></div>
        </div>
    );
};

export default Hero;
