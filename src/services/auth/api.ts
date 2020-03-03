import { request } from '../api';
import { paths } from './constants';
import { IAuthSignUp, IAuthSignIn, IAuthRecoverPassword } from './types';

const { SIGN_UP, RECOVER_PASSWORD, SIGN_IN } = paths;

type SignInResponse = any;
type SignUpResponse = any;
type RecoverPassword = any;

export const authApi = {
  signIn: (credentials: IAuthSignIn) => {
    return request<SignInResponse>('POST', SIGN_IN, credentials);
  },
  signUp: (userData: IAuthSignUp) => {
    return request<SignUpResponse>('POST', SIGN_UP, userData);
  },
  recover_password: (userEmail: IAuthRecoverPassword) => {
    return request<RecoverPassword>('POST', RECOVER_PASSWORD, userEmail);
  },
};
