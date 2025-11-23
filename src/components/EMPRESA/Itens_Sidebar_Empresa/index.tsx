import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function Itens_Sidebar_Empresa() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // volta para login
  };

  const linkClasses =
    "text-white text-lg font-medium w-full py-3 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center";

  return (
    <div className="flex flex-col justify-between bg-green-600 min-h-screen p-4">
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            to="/empresa/areaprincipal"
            className={`${linkClasses} bg-green-500 hover:bg-green-600`}
          >
            Minhas Demandas
          </Link>
        </li>

        <li>
          <Link
            to="/empresa/areaprincipal/cadastrarnovademanda"
            className={`${linkClasses} bg-green-500 hover:bg-green-600`}
          >
        Nova Demanda
          </Link>
        </li>

        <li>
          <Link
            to="/empresa/areaprincipal/minhaconta"
            className={`${linkClasses} bg-green-500 hover:bg-green-600`}
          >
            Minha Conta
          </Link>
        </li>
      </ul>

      <button
        onClick={handleLogout}
        className={`${linkClasses} bg-red-500 hover:bg-red-600`}
      >
        Logout
      </button>
    </div>
  );
}
