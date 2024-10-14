import "./projects.css";

import SkillWidget from "../../components/skill-widget/skill-widget";

const projects = [
    { 
        id: 1, 
        name: "TokenShield", 
        year: "2023-2024", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quibusdam.", 
        skills: [
            { name: "Next.js", color: "#000000", textColor: "#ffffff" },
            { name: "Typescript", color: "#3178c6", textColor: "#ffffff" },
            { name: "NestJS", color: "#ea2845", textColor: "#ffffff" },
            { name: "Prisma", color: "#2f265f", textColor: "#ffffff" },
        ] 
    },
    { 
        id: 4, 
        name: "Proximity Protocol", 
        year: "2023-2024", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quibusdam.", 
        skills: [
            { name: "Next.js", color: "#000000", textColor: "#ffffff" },
            { name: "Typescript", color: "#3178c6", textColor: "#ffffff" },
        ] 
    },
    
    { 
        id: 3, 
        name: "Etch-a-Sketch", 
        year: "2020-2024", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quibusdam.", 
        skills: [
            { name: "HTML", color: "#e34c26", textColor: "#ffffff" },
            { name: "CSS", color: "#3178c6", textColor: "#ffffff" },
            { name: "JavaScript", color: "#f7df1e" },
        ] 
    },
    { 
        id: 2, 
        name: "Calculator", 
        year: "2021-2024", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quibusdam.", 
        skills: [
            { name: "HTML", color: "#e34c26", textColor: "#ffffff" },
            { name: "CSS", color: "#3178c6", textColor: "#ffffff" },
            { name: "JavaScript", color: "#f7df1e" },
        ] 
    },

];

function Projects() {
    return (
        <div className="projects-container">
            {projects.map(project => (
                <div key={project.id} className="project-container">
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
            ))}
        </div>
    );
}

export default Projects;
