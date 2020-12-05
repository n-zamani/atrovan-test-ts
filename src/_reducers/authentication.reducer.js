import { AuthenticationConstants } from '../_constants';

const initialState = {
  loggingIn: false,
  loggedIn: false,
  loginError: null,
  token: null,
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case AuthenticationConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        loginError: null,
      };

    case AuthenticationConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        token: action.token,
      };

    case AuthenticationConstants.LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        loginError: action.error,
      };

    case AuthenticationConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        token: null,
      };

    case AuthenticationConstants.RESET:
      return {
        ...state,
        loggingIn: false,
        loginError: null,
      };

    default:
      return state;
  }
}
