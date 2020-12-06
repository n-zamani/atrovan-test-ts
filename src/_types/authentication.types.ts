export enum AuthenticationConstants {
  LOGIN_REQUEST= "LOGIN_REQUEST",
  LOGIN_SUCCESS= "LOGIN_SUCCESS",
  LOGIN_ERROR= "LOGIN_ERROR",
  LOGOUT= "LOGOUT",
  RESET_AUTH= "RESET_AUTH"
};

export interface ILoginData {
  username: string;
  password: string;
}

export interface IAuthToken {
  token: string | null;
}

export interface IAuthError {
  error: string | null;
}

export interface IAuthState {
  loggingIn: boolean;
  loggedIn: boolean;
  loginError: IAuthError;
  user: IAuthToken;
}

interface ILoginRequestAction {
  type: typeof AuthenticationConstants.LOGIN_REQUEST
}

interface ILoginSuccessAction {
  type: typeof AuthenticationConstants.LOGIN_SUCCESS;
  payload: IAuthToken;
}

interface ILoginErrorAction {
  type: typeof AuthenticationConstants.LOGIN_ERROR;
  payload: IAuthError;
}

interface ILogoutAction {
  type: typeof AuthenticationConstants.LOGOUT;
}

interface IResetAuthAction {
  type: typeof AuthenticationConstants.RESET_AUTH;
}

export type AuthActionTypes = (ILoginRequestAction | ILoginSuccessAction | ILoginErrorAction | ILogoutAction | IResetAuthAction)