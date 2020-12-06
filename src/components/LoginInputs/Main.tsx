import { useState, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../../_actions';
import { useStyles } from './style';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AppState } from '../../_helpers/store';

interface IState {
  username: string;
  password: string;
}

const Main: FC = () => {
  const classes = useStyles();
  const loggingIn = useSelector((state: AppState) => state.authentication.loggingIn);
  const dispatch = useDispatch();

  const [state, setState] = useState<IState>({
    username: '',
    password: '',
  });

  const handleInputChange = ({ target: { name, value } }: {target: {name: string, value: string}}) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(loginAction({ username: state.username, password: state.password }));
  };

  return (
    <Paper elevation={3} className={classes.paper}>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <TextField
          variant="outlined"
          className={classes.textField}
          id="username"
          label="Username"
          name="username"
          value={state.username}
          onChange={handleInputChange}
          required
        />
        <TextField
          variant="outlined"
          className={classes.textField}
          id="password"
          label="Password"
          name="password"
          type="password"
          value={state.password}
          onChange={handleInputChange}
          required
        />
        <Button variant="contained" color="primary" className={classes.button} type="submit">
          {loggingIn ? <CircularProgress color="inherit" size={30} /> : 'Login'}
        </Button>
      </form>
    </Paper>
  );
};

export { Main as LoginInputs };
