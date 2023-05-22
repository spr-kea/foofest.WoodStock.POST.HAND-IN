import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

function useAuth() {
  const value = useContext(AuthContext);

 

  return value;
}

export { useAuth };
