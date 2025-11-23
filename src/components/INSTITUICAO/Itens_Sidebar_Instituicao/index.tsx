import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function Itens_Sidebar_instituicao() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // volta para a página de login
  };

  // Estilos de link padrão
  const linkClasses =
    "text-white text-lg font-medium w-full py-3 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center";

  return (
    <div className="flex flex-col justify-between bg-purple-600 min-h-screen p-4">
      {/* LINKS PRINCIPAIS */}
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            to="/instituicao/areaprincipal"
            className={`${linkClasses} bg-purple-500 hover:bg-purple-600`} // Página principal: roxo
          >
            Eventos Cadastrados
          </Link>
        </li>

        <li>
          <Link
            to="/instituicao/areaprincipal/minhaconta"
            className={`${linkClasses} bg-purple-500 hover:bg-purple-600`} // Minha Conta: roxo
          >
            Minha Conta
          </Link>
        </li>
      </ul>

      {/* LOGOUT NO FINAL */}
      <button
        onClick={handleLogout}
        className={`${linkClasses} bg-red-500 hover:bg-red-600`}
      >
        Logout
      </button>
    </div>
  );
}
