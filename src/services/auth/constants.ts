import { CredentialSchema, SignUpSchema, EmailSchema } from './schemas';
import { ObjectSchema } from 'yup';

export const paths = {
  SIGN_IN: 'login',
  SIGN_UP: 'signup',
  RECOVER_PASSWORD: 'recover_password',
};

export const AUTH_MOCK_RESPONSES = {
  login: { firstName: 'Mocked', lastName: 'User', token: 'MockedJWTToken' },
  signup: { firstName: 'Mocked', lastName: 'User', token: 'MockedJWTToken' },
  recover_password: { success: true },
};

export const FORM_FIELDS: { [key: string]: string[] } = {
  SIGN_IN: ['email', 'password'],
  SIGN_UP: ['firstName', 'lastName', 'email', 'password'],
  RESET_PASSWORD: ['email'],
};

export const SCHEMAS: { [key: string]: ObjectSchema } = {
  SIGN_IN: CredentialSchema,
  SIGN_UP: SignUpSchema,
  RESET_PASSWORD: EmailSchema,
};

export const BOTTOM_NAV_BUTTONS: { [key: string]: string[] } = {
  SIGN_IN: ['RESET_PASSWORD', 'SIGN_UP'],
  SIGN_UP: ['SIGN_IN', 'RESET_PASSWORD'],
  RESET_PASSWORD: ['SIGN_IN', 'SIGN_UP'],
};
