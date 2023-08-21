import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div>
      {isAuthenticated ? (
        <h2>Welcome to the Dashboard</h2>
      ) : (
        <p>Please login to access the dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
