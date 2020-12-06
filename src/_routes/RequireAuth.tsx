import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const RequireAuth = ({ Component }) => {
  const token = useSelector(state => state.authentication.token);

  if (!token) {
    return <Redirect to="/login" />;
  }
  return <Component />;
}

export { RequireAuth };
