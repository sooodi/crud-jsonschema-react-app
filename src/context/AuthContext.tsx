import { createContext } from "react";
import { User } from "../utils/common.type";

interface AuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContext>({
  isLoading: true,
  isAuthenticated: false,
  user: null,
  login: (user: User | null) => {},
  logout: () => {},
  setUser: (user: User | null) => {},
});
