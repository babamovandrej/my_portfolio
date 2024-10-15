import './sections.css';
import useSmoothScroll from '../components/hooks/useSmoothScroll';

import About from './about/about';
import Projects from './project/projects';
import Contact from './contact/contact';
import Skills from './skills/skills';

const sections = [
    { id: 'about', component: <About /> },
    { id: 'skills', component: <Skills /> },
    { id: 'projects', component: <Projects /> },
    { id: 'contact', component: <Contact /> },
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