import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AuthenticationConstants, ILoginData, AuthActionTypes, IAuthState, IAuthToken, IAuthError } from '../_types';
import { AuthenticationServices } from '../_services';

type AuthThunk<ReturnType = void> = ThunkAction<ReturnType, IAuthState, null, AuthActionTypes>;

export function loginAction(data: ILoginData): AuthThunk {
  return (dispatch: Dispatch) => {
    dispatch(request());

    AuthenticationServices.login(data).then(
      (response: { token: string }) => {
        dispatch(success({ token: response.token }));
      },
      async (error) => {
        const e: string & { message: string } = await error;
        dispatch(fail(e.message ? { error: e.message } : { error: e }));
      }
    );
  };

  function request(): AuthActionTypes {
    return {
      type: AuthenticationConstants.LOGIN_REQUEST,
    };
  }

  function success(payload: IAuthToken): AuthActionTypes {
    return {
      type: AuthenticationConstants.LOGIN_SUCCESS,
      payload,
    };
  }

  function fail(payload: IAuthError): AuthActionTypes {
    return {
      type: AuthenticationConstants.LOGIN_ERROR,
      payload,
    };
  }
}

export function logoutAction(): AuthThunk {
  return (dispatch: Dispatch) => {
    dispatch(logout());
  };

  function logout(): AuthActionTypes {
    return {
      type: AuthenticationConstants.LOGOUT,
    };
  }
}

export function resetAuth(): AuthThunk {
  return (dispatch: Dispatch) => {
    dispatch(success());
  };

  function success(): AuthActionTypes {
    return {
      type: AuthenticationConstants.RESET_AUTH,
    };
  }
}
