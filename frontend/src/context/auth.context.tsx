import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  token: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const navigate = useNavigate();

  const login = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token);
    navigate("/blog");
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    if (!token) navigate("login");
  }, [token, navigate]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!token, login, logout, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
