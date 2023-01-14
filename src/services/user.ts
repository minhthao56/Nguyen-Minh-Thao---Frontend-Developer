import { FormAuthProps } from "../types/user";
import axiosClient from "./axiosClient";

export interface AuthResp {
  email: string;
  token: string;
}

export const apiUser = {
  whoiam: () => {
    return axiosClient.get<any, AuthResp>("/whoiam");
  },

  register: async (user: FormAuthProps) => {
    return axiosClient.post<any, AuthResp>("/register", { ...user });
  },

  login: async (user: FormAuthProps) => {
    return axiosClient.post<any, AuthResp>("/login", { ...user });
  },
};
