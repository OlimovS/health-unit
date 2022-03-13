import axiosIns from "../axiosIns";
import { event_path, post_path } from "./apiPaths";

export interface IPostReq {
  title: string;
  content: string;
}

export interface IEventReq extends IPostReq {
  date: number;
}

export const makePost = (data: IPostReq) => {
  return axiosIns.post(post_path, data);
};

export const makeEvent = (data: IEventReq) => {
  return axiosIns.post(event_path, data);
};
