import axiosClient from "./axiosClient";

import respRocket from "./rocket.json";

type RespRocket = typeof respRocket;

export const apiRocket = {
  getRockets: (search: string) => {
    return axiosClient.get<any, RespRocket>(`/rockets?search=${search}`);
  },
};
