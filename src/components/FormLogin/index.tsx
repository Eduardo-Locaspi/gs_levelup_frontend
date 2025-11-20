import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Importar useNavigate
import type { LoginType } from "../../types/LoginType"; 

export default function FormLogin() {
    
    // 2. Inicializar o hook de navegação
    const navigate = useNavigate(); 
    
    const [formValues, setFormValues] = useState<LoginType>({login:"", senha:""});
    const [error, setError] = useState<string | null>(null); // Estado para exibir erros ao usuário
    
    // URL de backend que você deve configurar
    const login_endpoint = "http://localhost:8080/login/login"; 

    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleLogin = async (e:React.FormEvent) => {
        e.preventDefault();
        setError(null); // Limpar erros anteriores
        
        try {
            const response = await fetch(login_endpoint, {
                method:"POST",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(formValues)
            });
            
            const responseBody = await response.text(); 

            // Se a resposta for diferente de 200 (OK), trata como erro
            if (!response.ok) {
                // Se o backend retornou uma mensagem de erro, use-a. Caso contrário, use uma mensagem padrão.
                const errorMessage = responseBody || `Falha na autenticação. Status: ${response.status}`;
                throw new Error(errorMessage);
            }

             
            let responseData;
            try {
                responseData = JSON.parse(responseBody);
            } catch (jsonError) {
                throw new Error("Erro ao processar a resposta do servidor. Resposta não é um JSON válido.");
            }


            // --- 3. SUCESSO NO LOGIN ---
            
            // Supondo que o backend retorna um token JWT na propriedade 'token' ou 'accessToken'
            const token = responseData.token || responseData.accessToken; 
            
            if (token) {
                // 4. Armazenar o token no Local Storage (ou em um Cookie para mais segurança)
                localStorage.setItem('authToken', token);
                
                // Opcional: Armazenar dados do usuário, se retornados
                // localStorage.setItem('user', JSON.stringify(responseData.user));
                
                // 5. Redirecionar o usuário para a Dashboard após o login.
                // Usamos { replace: true } para que o botão 'voltar' do navegador não leve à página de Login novamente.
                navigate('/dashboard', { replace: true });
            } else {
                 throw new Error("Login bem-sucedido, mas o token de autenticação não foi recebido.");
            }
            
        } catch (error) {
            // Se o erro for uma instância de Error, use a message, senão use a string do erro
            const errorMessage = error instanceof Error ? error.message : "Ocorreu um erro desconhecido durante o login.";
            console.error("Erro no login:", errorMessage);
            setError(errorMessage); // 6. Definir o erro para exibição no frontend
        }
    };
    
    return(
        <form onSubmit={handleLogin} className="flex flex-col gap-2">

            {/* Campos de Login */}
            <input 
                type="text" 
                name="login" 
                placeholder="Login" 
                onChange={handleChange} 
                value={formValues.login} 
                className="border-2 rounded-md py-2 px-4" 
                required
            />

            <input 
                type="password" 
                name="senha" 
                placeholder="Senha" 
                onChange={handleChange} 
                value={formValues.senha} 
                className="border-2 rounded-md py-2 px-4" 
                required
            />
            
            {/* 7. Exibição de Erro */}
            {error && (
                <p className="text-red-500 text-sm mt-2 text-center font-medium">{error}</p>
            )}

            <button type="submit" className="text-1xl my-5 bg-blue-600 p-2 rounded-md text-white hover:bg-blue-700 transition-colors"> 
                ENTRAR
            </button>
        </form>
    );
}