import { AuthenticationConstants, IAuthState, AuthActionTypes } from '../_types';

const initialState: IAuthState = {
  loggingIn: false,
  loggedIn: false,
  user: { token: null },
  loginError: { error: null },
};

export function authentication(state = initialState, action: AuthActionTypes): IAuthState {
  switch (action.type) {
    case AuthenticationConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        loginError: { error: null },
      };

    case AuthenticationConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        user: action.payload,
      };

    case AuthenticationConstants.LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        loginError: action.payload,
      };

    case AuthenticationConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: { token: null },
      };

    case AuthenticationConstants.RESET_AUTH:
      return {
        ...state,
        loggingIn: false,
        loginError: { error: null },
      };

    default:
      return state;
  }
}
