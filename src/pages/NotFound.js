import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <p>The page you're looking for does not exist.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};
