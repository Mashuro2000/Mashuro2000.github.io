import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

export const Project = () => {
    const { id } = useParams(); // Get the dynamic ID from the URL
    const project = projects.find((proj) => proj.id === parseInt(id));

    if (!project) {
        return (
            <div className='project'>
                <h2>Project not found</h2>
                <Link to="/">Go back home.</Link>
            </div>
        );
    }

    return (
        <div className='project'>
            {/* The logo and header */}
            <div className='logo-header'>
                <img className='logo-project' src={project.logo} />
                <h1 className='title-project'>{project.title}</h1>
            </div>

            <div className='project-body'>
                {/* The tech stack */}
                <div className='sidebar'>
                    <h2>The Tech Stack Used</h2>
                    <ul>
                        {project.tech_stack.map((tech, index) => (
                            <li key={index}>{tech}</li> // Use map to create a list item for each tech
                        ))}
                    </ul>
                    <h2>What I Learnt</h2>
                    <p>{project.learnt}</p>
                </div>
                
                <div className='photo-description'>
                    {/* Photos */}
                    <div>
                        
                    </div>

                    {/* The description */}
                    <div className='project-description'>
                        <h3>Description</h3>
                        <h3>{project.description}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
