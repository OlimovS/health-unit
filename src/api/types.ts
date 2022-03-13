export interface IRegisterParams {
  name: {
    first_name: string;
    last_name: string;
  };
  password: string;
  email: string;
}

export interface ILoginParams {
  password: string;
  email: string;
}

export interface IBaseApiResponse {
  success: boolean;
  message: string;
}
export interface ILoginResponse extends IBaseApiResponse {
  data: {
    token: string;
    user: string;
  };
}
