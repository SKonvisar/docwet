export interface IAuthRecoverPassword {
  email: string;
}

export interface IAuthSignIn extends IAuthRecoverPassword {
  password: string;
}

export interface IUserNameFields {
  firstName: string;
  lastName: string;
}

export interface IAuthSignUp extends IAuthSignIn, IUserNameFields {}
