import { AuthenticationConstants } from '../_constants';
import { AuthenticationServices } from "../_services";

export const AuthenticationActions = {
  login,
  logout,
  reset
};

function login(username, password) {
  return dispatch => {
    dispatch(request())

    AuthenticationServices.login(username, password).then(
      response => {
        dispatch(success(response.token))
      },
      async error => {
        const e = await error;
        dispatch(fail(e.message ? e.message : e))
      }
    )
  }

  function request() {
    return {
      type: AuthenticationConstants.LOGIN_REQUEST
    }
  }

  function success(token) {
    return {
      type: AuthenticationConstants.LOGIN_SUCCESS,
      token,
    };
  }

  function fail(error) {
    return {
      type: AuthenticationConstants.LOGIN_ERROR,
      error
    }
  }
}

function logout() {
  return dispatch => {
    dispatch(success());
  }

  function success() {
    return {
      type: AuthenticationConstants.LOGOUT
    }
  }
}

function reset() {
  return (dispatch) => {
    dispatch(success());
  };

  function success() {
    return {
      type: AuthenticationConstants.RESET,
    };
  }
}