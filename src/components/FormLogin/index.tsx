import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginType } from "../../types/LoginType";
import { useAuth } from "../../context/AuthContext";

export default function FormLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formValues, setFormValues] = useState<LoginType>({
    login: "",
    senha: ""
  });

  const [error, setError] = useState<string | null>(null);

  const login_endpoint = "https://levelup-jtfg.onrender.com/auth/login";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(login_endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues)
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Erro HTTP: ${response.status}`);
      }

      const data = await response.json();

      // 🔹 Verifica se todos os dados esperados vieram do backend
      const { token, perfil, nm_usuario, id_usuario } = data;

      if (!token || !id_usuario) {
        throw new Error("Resposta inválida do servidor: id_usuario ou token ausente.");
      }

      // 🔥 Atualiza o contexto de autenticação
      login({ token, perfil, nm_usuario, id_usuario });

      // 🔹 Redireciona de acordo com o perfil
      switch (perfil) {
        case "pessoa":
          navigate("/pessoa/areaprincipal", { replace: true });
          break;
        case "empresa":
          navigate("/empresa/areaprincipal", { replace: true });
          break;
        case "instituicaoAcademica":
          navigate("/instituicao/areaprincipal", { replace: true });
          break;
        default:
          console.warn("Perfil desconhecido:", perfil);
      }

    } catch (err) {
      const msg = err instanceof Error ? err.message : "Erro desconhecido.";
      console.error(msg);
      setError(msg);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-2">
      <input
        type="text"
        name="login"
        placeholder="Login"
        value={formValues.login}
        onChange={handleChange}
        className="border-2 rounded-md py-2 px-4"
        required
      />

      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={formValues.senha}
        onChange={handleChange}
        className="border-2 rounded-md py-2 px-4"
        required
      />

      {error && (
        <p className="text-red-500 text-sm mt-2 text-center font-medium">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="text-1xl my-5 bg-blue-600 p-2 rounded-md text-white hover:bg-blue-700 transition-colors"
      >
        ENTRAR
      </button>
    </form>
  );
}
