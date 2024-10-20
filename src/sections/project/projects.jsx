import React from "react";
import "./projects.css";
import SkillWidget from "../../components/skill-widget/skill-widget";

const projects = [
	{
		id: 1,
		name: "TokenShield",
		description: "Digital asset security made for retail users",
		skills: ["Next.js", "Nest.js", "Prisma", "Postgres", "Redux"],
	},
	{
		id: 2,
		name: "Proximity Protocol",
		description: "Tool for minting assets with NFC verification.",
		skills: ["Next.js", "Typescript", "Solidity", "Redux"]
	},
	{
		id: 3,
		name: "Etch-a-Sketch",
		description: "Simple web-based drawing app to create sketches.",
		skills: ["Javascript", "HTML", "CSS"]
	},
	{
		id: 4,
		name: "Calculator",
		description: "Basic web calculator for quick math operations.",
		skills: ["Javascript", "HTML", "CSS"]
	},
];

function Projects() {
	return (
		<div className='projects-container'>
			{projects.map((project) => (
				<Project key={project.id} project={project} />
			))}
		</div>
	);
}

const Project = ({ project }) => {
	return (
		<div className='project-container'>
			<div className='project-info'>
				<div className='project-title'>
					<p>{project.name}</p>
				</div>
				<div className='project-skills'>
					{project.skills.map((skill, index) => (
						<SkillWidget key={index} text={skill} />
					))}
				</div>
			</div>
			<div className='project-description'>
				<p>{project.description}</p>
			</div>
		</div>
	);
};

export default Projects;
