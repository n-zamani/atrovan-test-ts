import { useState, useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetAuth } from '../../_actions';
import { LoginInputs } from '../../components';
import { LoginWrapper } from './style';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { AppState } from '../../_helpers/store';

const Main: FC = () => {
  const loginError = useSelector((state: AppState) => state.authentication.loginError.error);
  const dispatch = useDispatch();
  const [snackbar, setSnackbar] = useState(false);

  useEffect(() => {
    dispatch(resetAuth());
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
