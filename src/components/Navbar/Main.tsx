import { FC } from "react";
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../_actions';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { useStyles } from './style';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Main: FC<RouteComponentProps<any>> = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { pathname } = props.location;

  return (
    <AppBar position="fixed" color="default">
      <Toolbar className={classes.toolbar}>
        <nav>
          <Link to="/">
            <Button>Home</Button>
          </Link>

          {pathname === '/login' ? (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          ) : pathname?.includes('/device/') ? (
            <Link to="/">
              <Button>Device List</Button>
            </Link>
          ) : (
            ''
          )}
        </nav>

        <div>
          <Button onClick={() => dispatch(logoutAction())}>Logout</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const NavbarWithRouter = withRouter(Main);

export { NavbarWithRouter as Navbar };
