import { useRef } from 'react';
const Bio = () => {
    const bioRef = useRef(null);
    return (
        <div className="bio mt-20 container mx-auto overflow-hidden">
            <p ref={bioRef}>
                Hi, I'm Omar - a passionate ReactJS Developer with a love for
                modern, scalable web applications. With expertise in React and
                Redux, I thrive in collaborative environments and enjoy tackling
                new challenges. When I'm not coding, I enjoy outdoor activities
                and engaging in my favorite hobbies.
            </p>
        </div>
    );
};

export default Bio;
