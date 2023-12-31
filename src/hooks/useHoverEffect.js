import { useEffect } from 'react';
import hoverEffect from 'hover-effect';
import cloud from '../assets/images/cloud.png';
export const useHoverEffect = (el, img1, img2) => {
    useEffect(() => {
        new hoverEffect({
            parent: el.current,
            image1: img1,
            image2: img2,
            // bland midel  displacement image
            displacementImage: cloud,
            intensity: 0.3,
        });
    }, [el, img1, img2]);
};
