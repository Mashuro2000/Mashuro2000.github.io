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
            <div>
                <img></img>
                <h1>{project.title}</h1>
            </div>

            {/* The tech stack */}
            <div>

            </div>

            {/* Photos */}
            <div>

            </div>

            {/* The description */}
            <div>
                <p>{project.description}</p>
            </div>
        </div>
    );
};
