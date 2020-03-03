import { FormikValues, FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';

import { authApi } from '../../services/auth/api';

import {
  IAuthSignUp,
  IAuthSignIn,
  IAuthRecoverPassword,
} from '../../services/auth/types';

import { actions } from '../../services/user/actions';
import { ROUTES } from 'src/constants/routes';

type ISubmitFn<Values> = (values: Values) => void;
type ISignInStrategy = ISubmitFn<IAuthSignIn>;
type ISignUpStrategy = ISubmitFn<IAuthSignUp>;
type IRecoveryStrategy = ISubmitFn<IAuthRecoverPassword>;

export const useAuthTemplateHandlers = (props: any) => {
  const { name: currentScreen } = props.route;

  const dispatch = useDispatch();

  const _setUserAndNavigate = (user: any) => {
    dispatch(actions.setUser(user));
    navigateTo(ROUTES.APP);
  };

  const signIn: ISignInStrategy = async (credentials) => {
    const user = await authApi.signIn(credentials);
    _setUserAndNavigate(user);
  };

  const signUp: ISignUpStrategy = async (userData) => {
    const user = await authApi.signUp(userData);
    _setUserAndNavigate(user);
  };

  const resetPassword: IRecoveryStrategy = async (email) => {
    const isMailSend = await authApi.recover_password(email);
    navigateTo('SIGN_IN');
    return isMailSend;
  };

  const onSubmit = async (
    values: FormikValues,
    formController: FormikHelpers<any>
  ) => {
    const AUTH_STRATEGIES: { [key: string]: any } = {
      SIGN_IN: signIn,
      SIGN_UP: signUp,
      RESET_PASSWORD: resetPassword,
    };

    try {
      formController.setSubmitting(true);
      await AUTH_STRATEGIES[currentScreen](values);
      formController.resetForm();
    } catch (e) {
      // TODO: add error handler
      console.log(e, 'onSumbit error');
    }
  };

  const navigateTo = (route: string): void => {
    props.navigation.navigate(route);
  };

  return { onSubmit, navigateTo, currentScreen };
};
