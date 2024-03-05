// Dashboard.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <div>
      <h1>Dashboard</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome!</p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default Dashboard;
