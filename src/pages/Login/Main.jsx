import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AuthenticationActions } from '../../_actions';
import { LoginInputs } from '../../components';
import { LoginWrapper } from './style';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Main = () => {
  const loginError = useSelector((state) => state.authentication.loginError);
  const dispatch = useDispatch();
  const [snackbar, setSnackbar] = useState(false);

  useEffect(() => {
    dispatch(AuthenticationActions.reset());
  }, [])

  useEffect(() => {
    if (loginError) {
      setSnackbar(true);
    } else {
      setSnackbar(false);
    }
  }, [loginError]);

  const handleSnackbarClose = () => {
    setSnackbar(false);
  };

  return (
    <LoginWrapper>
      <LoginInputs />
      <Snackbar
        open={snackbar}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="error">
          {loginError}
        </MuiAlert>
      </Snackbar>
    </LoginWrapper>
  );
};

export { Main as LoginPage };
