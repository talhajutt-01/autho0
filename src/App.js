// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import Dashboard from './Dashboard';

const domain = 'dev-kkqnpbv2p0y1dviy.us.auth0.com';
const clientId = 'vt01JCHnJhvQpN6Zmn3P1TbCMHRvHBQY';

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}

export default App;
