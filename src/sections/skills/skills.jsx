import React from "react";
import "./skills.css";

function Skills() {
    const rotatingText = "- FRONTEND - BACKEND - API's & SERVICES";

    return (
        <div className="skills-container">
            <div className="globe">
                <div className="ring">
                    {rotatingText.split("").map((char, index) => (
                        <span key={index} style={{ "--i": index + 1 }}>
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </div>
            </div>
            <div className="skills-content">
            </div>
        </div>
    );
}

export default Skills;