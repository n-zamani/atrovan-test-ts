import {FC} from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppState } from '../_helpers/store';

interface IRequireAuthProps {
  Component: React.ComponentType;
}

const RequireAuth: FC<IRequireAuthProps> = ({ Component }) => {
  const token = useSelector((state: AppState) => state.authentication.user.token);

  if (!token) {
    return <Redirect to="/login" />;
  }
  return <Component />;
};

export { RequireAuth };
