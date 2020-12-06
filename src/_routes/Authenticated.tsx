import {FC} from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppState } from '../_helpers/store';

interface IAuthenticatedProps {
  Component: React.ComponentType;
}

const Authenticated: FC<IAuthenticatedProps> = ({ Component }) => {
  const token = useSelector((state: AppState) => state.authentication.user.token);

  if (token) {
    return <Redirect to="/" />;
  }
  return <Component />;
};

export { Authenticated };
