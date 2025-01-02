import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='project'>
      <h2>404 - Page not found</h2>
      <Link id="GoHome" to="/">Go Back Home</Link>
    </div>
  );
};
