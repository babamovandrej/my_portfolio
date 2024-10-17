import React from "react";
import "./projects.css";


const projects = [
	{
		id: 1,
		name: "TokenShield",
		description: "Digital asset security solution made for retail users"
	},
	{
		id: 2,
		name: "Proximity Protocol",
		description: "Simple calculator covering all of the basic operations"
	},
	{
		id: 3,
		name: "Etch-a-Sketch",
		description: "Sketching tool"
	},
	{
		id: 4,
		name: "Calculator",
		description: "Simple calculator covering all of the basic operations"
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
				<div className='project-year'>
					<p>{project.year}</p>
				</div>
			</div>
			<div className='project-description'>
				<p>{project.description}</p>
			</div>
		</div>
	);
};

export default Projects;
