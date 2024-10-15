import React from "react";
import "./projects.css";
import SkillWidget from "../../components/skill-widget/skill-widget";

const projects = [
    { 
        id: 1, 
        name: "TokenShield", 
        year: "2023-2024", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quibusdam.", 
    },
    { 
        id: 4, 
        name: "Proximity Protocol", 
        year: "2023-2024", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quibusdam.", 
    },
    { 
        id: 3, 
        name: "Etch-a-Sketch", 
        year: "2020-2024", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quibusdam.", 
    },
    { 
        id: 2, 
        name: "Calculator", 
        year: "2021-2024", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quibusdam.", 
    },
];

function Projects() {
    return (
        <div className="projects-container">
            {projects.map(project => (
                <Project key={project.id} project={project} />
            ))}
        </div>
    );
}

const Project = ({ project }) => {
    return (
        <div className="project-container">
            <div className="project-info">
                <div className="project-title">
                    <p>{project.name}</p>
                </div>
                <div className="skills-container">
                    {project.skills && project.skills.map((skill, index) => (
                        <SkillWidget key={index} skill={skill.name} color={skill.color} textColor={skill.textColor} />
                    ))}
                </div>
            </div>
            <div className="project-year">
                <p>{project.year}</p>
            </div>
            <div className="project-description">
                <p>{project.description}</p>
            </div>
        </div>
    );
};

export default Projects;