import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import ImageCollage from "../components/imagecollage";

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
                <h1 className='title-project'>{project.title}</h1>
            </div>

            {/* Photos */}
            <div>
                <ImageCollage className='image-wrapper'images={project.images}/>
            </div>

            {/* The description */}
            <div className='project-description'>
                <h2>Description</h2>
                <p>{project.description}</p>
            </div>

          
            {/* The tech stack */}
            <div className='tech-stack'>
                <h2>The Tech Stack Used</h2>
                <ul>
                    {project.tech_stack.map((tech, index) => (
                        <li key={index}>{tech}</li> 
                    ))}
                </ul>
            </div>
        </div>
    );
};
