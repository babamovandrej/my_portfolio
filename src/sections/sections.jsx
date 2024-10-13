import React from 'react';
import './sections.css';
import About from './about/about';

function Sections() {
    return (
        <div className="snap-container">
            <div className="snap-section" id="section-1">
                <About />
            </div>
            <div className="snap-section" id="section-2">
                Section 2
            </div>
            <div className="snap-section" id="section-3">
                Section 3
            </div>
            <div className="snap-section" id="section-4">
                Section 4
            </div>
        </div>
    );
}

export default Sections;