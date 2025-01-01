import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import ImageCollage from "../components/imagecollage";

export const Project = () => {
    const { id } = useParams(); 
    const project = projects.find((proj) => proj.id === parseInt(id));


    if (!project) {
        return (
            <div className='project'>
                <h2>Project not found</h2>
                <Link id='GoHome' to="/">Back home</Link>
            </div>
        );
    }

    return (
        <div className='project'>
            <div className='logo-header'>
                <h1 className='title-project'>{project.title}</h1>
            </div>
            <div>
                <ImageCollage className='image-wrapper' images={project.images} />
            </div>

            <div className='project-description'>
                <h2>Description</h2>
                <p>{project.description}</p>
            </div>

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
