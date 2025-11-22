// context/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";

type AuthData = {
  token: string | null;
  perfil: string | null;
  nm_usuario: string | null;
  id_usuario: number | null;
};

type AuthContextType = {
  auth: AuthData;
  login: (data: AuthData) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthData>({
    token: null,
    perfil: null,
    nm_usuario: null,
    id_usuario: null,
  });

  // Carrega o auth do localStorage ao iniciar a aplicação
  useEffect(() => {
    const saved = localStorage.getItem("auth");
    if (saved) {
      setAuth(JSON.parse(saved));
    }
  }, []);

  function login(data: AuthData) {
    // Atualiza o estado
    setAuth(data);
    // Salva no localStorage
    localStorage.setItem("auth", JSON.stringify(data));
  }

  function logout() {
    setAuth({
      token: null,
      perfil: null,
      nm_usuario: null,
      id_usuario: null,
    });
    localStorage.removeItem("auth");
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro do AuthProvider");
  return ctx;
}
