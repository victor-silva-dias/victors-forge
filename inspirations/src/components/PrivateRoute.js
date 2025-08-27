import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import ActivityTracker from './ActivityTracker';

const PrivateRoute = ({ user }) => {
  // The decision is made based on the user prop passed from App.js.
  // This avoids race conditions and makes App.js the single source of truth.
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If the user exists, render the ActivityTracker layout.
  // The <Outlet /> is the placeholder for the nested private routes.
  return (
    <ActivityTracker>
      <Outlet />
    </ActivityTracker>
  );
};

export default PrivateRoute;
