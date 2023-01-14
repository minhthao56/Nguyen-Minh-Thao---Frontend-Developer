import { FormAuthProps } from "../types/user";
import axiosClient from "./axiosClient";

interface AuthResp {
  email: string;
  token: string;
}

export const apiUser = {
  whoiam: (email: string) => {
    return axiosClient.get("/whoiam", {
      params: {
        email,
      },
    });
  },

  register: async (user: FormAuthProps) => {
    return axiosClient.post<any, AuthResp>("/register", { ...user });
  },

  login: async (user: FormAuthProps) => {
    return axiosClient.post<any, AuthResp>("/login", { ...user });
  },
};
