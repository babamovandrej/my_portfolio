import "./about.css";
import { useEffect } from 'react';

function About() {
    useEffect(() => {
        const paragraphs = document.querySelectorAll('.about-container p');
        if (paragraphs[0]) {
            paragraphs[0].classList.add('animateStripfromLeft');
        }
        if (paragraphs[1]) {
            paragraphs[1].classList.add('animateStripfromRight');
        }
    }, []);

    return (
        <div className="about-container">
            <p>
                Hello! I'm <span className="highlight">Andrej Babamov</span>, a Full Stack Developer
            </p>
            <p>
                <span className="new-line">currently based in <span className="highlight">Skopje, Macedonia</span>.</span>
            </p>
        </div>
    );
}

export default About;