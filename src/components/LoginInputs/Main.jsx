import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AuthenticationActions } from '../../_actions';
import { useStyles } from './style';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

const Main = () => {
  const classes = useStyles();
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthenticationActions.login(state.username, state.password));
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
