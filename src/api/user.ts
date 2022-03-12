import { register_path } from "./apiPaths";
import axiosIns from "../axiosIns";
import { IRegisterParams } from "./types";

export const registerUser = (data: IRegisterParams) => {
  return axiosIns.post(register_path, data);
};
