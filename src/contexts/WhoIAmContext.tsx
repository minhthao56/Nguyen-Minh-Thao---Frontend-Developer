import { createContext, useContext } from "react";
import { AuthResp } from "../services/user";

export interface WhoIAmContextReturn extends AuthResp {
  isLoading?: boolean;
}

const WhoIAmContextContext = createContext<WhoIAmContextReturn>({
  email: "",
  token: "",
  isLoading: false,
});
WhoIAmContextContext.displayName = "WhoIAmContextContext";
const useWhoIAmContext = () => useContext(WhoIAmContextContext);
export { WhoIAmContextContext, useWhoIAmContext };
