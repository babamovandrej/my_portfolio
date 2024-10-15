import React from "react";
import "./about.css";

function About() {
    return (
        <div className="about-container">
            <p>
                Hey! I'm <span className="highlight">Andrej Babamov</span>, a Full Stack Developer
                <br />
                currently based in <span className="highlight">Skopje, Macedonia</span>.
            </p>
        </div>
    );
}

export default About;