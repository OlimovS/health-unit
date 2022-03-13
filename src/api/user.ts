import { login_path, register_path } from "./apiPaths";
import axiosIns from "../axiosIns";
import { ILoginParams, IRegisterParams } from "./types";

export const registerUser = (data: IRegisterParams) => {
  return axiosIns.post(register_path, data);
};

export const loginUser = (data: ILoginParams) => {
  return axiosIns.post(login_path, data);
};
