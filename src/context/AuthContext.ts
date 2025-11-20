import  { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { LoginType_Retorno } from '../types/LoginType_Retorno'; // Importa a tipagem

// 1. Define o Estado Mínimo do Contexto
interface AuthState {
    // 'dados' pode ser o objeto LoginType_Retorno ou null se não estiver logado
    dados: LoginType_Retorno | null;
    isAuthenticated: boolean;
    
    // Funções do Contexto
    login: (authData: LoginType_Retorno) => void;
    logout: () => void;
}

// 2. Cria o Contexto com um valor inicial que corresponde à interface
const AuthContext = createContext<AuthState>({
    dados: null,
    isAuthenticated: false,
    
    // Funções vazias padrão (serão implementadas no Provider)
    login: () => {}, 
    logout: () => {},
});

// Hook customizado para fácil acesso (useAuth())
export const useAuth = () => useContext(AuthContext);

// 3. Provedor do Contexto
interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    // Estado principal: armazena os dados de autenticação
    const [authData, setAuthData] = useState<LoginType_Retorno | null>(null);
    const isAuthenticated = authData !== null;

    // Efeito para carregar o estado inicial do localStorage
    useEffect(() => {
        // Tentamos ler a string JSON completa do localStorage
        const storedAuthData = localStorage.getItem('authData');

        if (storedAuthData) {
            try {
                // Parseamos o JSON de volta para o objeto
                const parsedData: LoginType_Retorno = JSON.parse(storedAuthData);
                setAuthData(parsedData);
            } catch (error) {
                console.error("Erro ao carregar dados de autenticação do localStorage:", error);
                localStorage.removeItem('authData'); // Limpa dados inválidos
            }
        }
    }, []);

    // Função para login (chamada do FormLogin)
    const login = (newAuthData: LoginType_Retorno) => {
        // Armazena no localStorage como JSON string para persistência
        localStorage.setItem('authData', JSON.stringify(newAuthData));

        // Atualiza o estado do Contexto para reatividade
        setAuthData(newAuthData);
    };

    // Função para logout
    const logout = () => {
        // Limpa a persistência
        localStorage.removeItem('authData');

        // Limpa o estado do Contexto
        setAuthData(null);
    };

    const contextValue: AuthState = {
        dados: authData,
        isAuthenticated,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};