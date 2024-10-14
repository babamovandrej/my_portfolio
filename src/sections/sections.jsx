import React from 'react';
import './sections.css';
import About from './about/about';
import useSmoothScroll from '../components/hooks/useSmoothScroll';

const sections = [
    { id: 'about', component: <About /> },
    { id: 'skills', component: <div>Skills</div> },
    { id: 'projects', component: <div>Projects</div> },
    { id: 'contact', component: <div>Contact</div> }
];

function Sections() {
    const containerRef = useSmoothScroll();

    return (
        <div className="snap-container" ref={containerRef}>
            {sections.map(section => (
                <div key={section.id} className="snap-section" id={section.id}>
                    {section.component}
                </div>
            ))}
        </div>
    );
}

export default Sections;