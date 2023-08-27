import { useRef } from 'react';

const Contact = () => {
    const contactTitleRef = useRef(null);
    return (
        <div className="contact container mx-auto mt-40" id="contact">
            <div className="overflow-hidden">
                <h2 className="section-title" ref={contactTitleRef}>
                    Let's Talk
                </h2>
            </div>
            <form className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="overflow-hidden">
                    <input
                        type="text"
                        placeholder="Write your name"
                        name="fullname"
                        required
                        className="fullname bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
                    />
                </div>
                <div className="overflow-hidden">
                    <input
                        type="email"
                        placeholder="Write your email"
                        name="email"
                        required
                        className="email bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
                    />
                </div>
                <div className="overflow-hidden">
                    <textarea
                        cols="30"
                        rows="1"
                        placeholder="Write your message"
                        name="message"
                        required
                        className="message bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 resize-none w-full"
                    />
                </div>
                <div className="overflow-hidden">
                    <input
                        type="submit"
                        value="Send message"
                        className="uppercase py-16 px-28 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500 w-full"
                    />
                </div>
            </form>
        </div>
    );
};

export default Contact;
