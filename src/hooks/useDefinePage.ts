import { useLocation } from "react-router-dom";

export default function useDefinePage() {
  const { pathname } = useLocation();

  return {
    isLoginPage: pathname === "/login",
  };
}
