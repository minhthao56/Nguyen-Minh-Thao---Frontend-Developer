import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";
import { WhoIAmContextContext } from "../contexts/WhoIAmContext";
import { apiUser } from "../services/user";

export interface WhoIAmProviderProps {
  children: ReactNode;
}
export default function WhoIAmProvider({ children }: WhoIAmProviderProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["whoiam"],
    queryFn: apiUser.whoiam,
    enabled: Boolean(localStorage.getItem("token")),
  });

  return (
    <WhoIAmContextContext.Provider
      value={{
        email: data?.email || "",
        token: data?.token || "",
        isLoading,
      }}
    >
      {children}
    </WhoIAmContextContext.Provider>
  );
}
