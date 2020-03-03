import * as yup from 'yup';

import {
  IAuthRecoverPassword,
  IAuthSignIn,
  IAuthSignUp,
  IUserNameFields,
} from './types';

export const EmailSchema = yup.object<IAuthRecoverPassword>().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Please, enter your email'),
});

export const CredentialSchema = yup.object<IAuthSignIn>().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Please, enter your email'),
  password: yup
    .string()
    .min(5, 'Password too short')
    .required('Please, enter your password'),
});

export const UserNamesSchema = yup.object<IUserNameFields>().shape({
  firstName: yup.string().required('Please, enter your first name'),
  lastName: yup.string().required('Please, enter your second name'),
});

export const SignUpSchema: yup.ObjectSchema<IAuthSignUp> = CredentialSchema.clone().concat<
  IUserNameFields
>(UserNamesSchema);
