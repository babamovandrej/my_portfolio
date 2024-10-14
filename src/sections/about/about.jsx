import React from "react";
import "./about.css";
import useTextAnimation from "../../components/hooks/useTextAnimation";

function About() {
    const aboutRef = useTextAnimation();

    return (
        <div className='about-container' ref={aboutRef}>
            <p>
                Hello! I'm <span className='highlight'>Andrej Babamov</span>, a Full Stack Developer
            </p>
            <p>
                <span className='new-line'>
                    currently based in <span className='highlight'>Skopje, Macedonia</span>.
                </span>
            </p>
        </div>
    );
}

export default About;