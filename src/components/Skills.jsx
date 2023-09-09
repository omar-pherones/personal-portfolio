import { useEffect, useRef } from 'react';
import {
    useSectionTitleReveal,
    useSkillInfoReveal,
    useSkillLineReveal,
} from '../hooks/gsap';
const data = [
    {
        id: 1,
        skill: 'HTML',
    },
    {
        id: 2,
        skill: 'CSS',
    },
    {
        id: 3,
        skill: 'SASS',
    },
    {
        id: 4,
        skill: 'Bootstrap',
    },
    {
        id: 5,
        skill: 'Tailwind CSS',
    },
    {
        id: 6,
        skill: 'JavaScript',
    },
    {
        id: 7,
        skill: 'React.js',
    },
    {
        id: 8,
        skill: 'React Router',
    },
    {
        id: 9,
        skill: 'Redux.js',
    },
    {
        id: 10,
        skill: 'Redux Toolkit',
    },
    {
        id: 11,
        skill: 'Axios',
    },
    {
        id: 12,
        skill: 'GSAP',
    },
    {
        id: 13,
        skill: 'Firebase',
    },
    {
        id: 14,
        skill: 'Strapi',
    },
];
const Skills = () => {
    const skillTitleRef = useRef(null);
    const skillItemRef = useRef([]);
    const skillItem2Ref = useRef([]);
    const skillInfoRef = useRef([]);
    const skillInfo2Ref = useRef([]);

    useSectionTitleReveal(skillTitleRef);
    useSkillLineReveal(skillItemRef.current);
    useSkillLineReveal(skillItem2Ref.current);
    useSkillInfoReveal(skillInfoRef.current);
    useSkillInfoReveal(skillInfo2Ref.current);
    return (
        <div className="skills container mx-auto mt-40" id="skills">
            <div className="overflow-hidden">
                <h2 className="section-title" ref={skillTitleRef}>
                    My Skills
                </h2>
            </div>
            <div className="skills-wrapper grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 mt-40 ">
                <ul className="skills-wrapper-1 flex flex-col gap-10">
                    {data
                        .filter((_, i) => i < Math.floor(data.length / 2))
                        .map((skill, i) => (
                            <li
                                key={skill.id}
                                ref={(el) => (skillItem2Ref.current[i] = el)}
                                className="skill-item overflow-hidden"
                            >
                                <div className="flex gap-10 items-baseline">
                                    <span className="skill-number text-white/50">
                                        {String(skill.id)
                                            .padStart(2, 0)
                                            .padEnd(3, '.')}
                                    </span>
                                    <span
                                        className="skill-name"
                                        ref={(el) =>
                                            (skillInfoRef.current[i] = el)
                                        }
                                    >
                                        {skill.skill}
                                    </span>
                                </div>
                            </li>
                        ))}
                </ul>
                <ul className="skills-wrapper-2 flex flex-col gap-10">
                    {data
                        .filter((_, i) => i >= Math.floor(data.length / 2))
                        .map((skill, i) => (
                            <li
                                key={skill.id}
                                ref={(el) => (skillItemRef.current[i] = el)}
                                className="skill-item overflow-hidden"
                            >
                                <div className="flex gap-10 items-baseline">
                                    <span className="skill-number text-white/50">
                                        {String(skill.id)
                                            .padStart(2, 0)
                                            .padEnd(3, '.')}
                                    </span>
                                    <span
                                        className="skill-name"
                                        ref={(el) =>
                                            (skillInfo2Ref.current[i] = el)
                                        }
                                    >
                                        {skill.skill}
                                    </span>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;
