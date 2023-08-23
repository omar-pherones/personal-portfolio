import { useRef } from 'react';
import { useHoverEffect } from '../hooks/useHoverEffect';
const data = {
    img1: 'https://res.cloudinary.com/dpkbthpcw/image/upload/v1674222467/Personal%20Portfolio/hero-1_jcy0jj.jpg',
    img2: 'https://res.cloudinary.com/dpkbthpcw/image/upload/v1674222467/Personal%20Portfolio/hero-2_sk0wmq.jpg',
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
