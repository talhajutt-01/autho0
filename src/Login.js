import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  // Redirect to index.html if user is authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      window.location.href = 'test/index.html';
    }
  }, [isAuthenticated]);

  return (
    <div>
      <h1>Login</h1>
      {isAuthenticated ? (
        <p>Welcome! Redirecting to index.html...</p>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
    </div>
  );
};

export default Login;
