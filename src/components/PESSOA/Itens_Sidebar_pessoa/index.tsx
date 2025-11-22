import { Link } from "react-router-dom";

export default function Itens_Sidebar_pessoa() {
  return (
    <ul className="flex flex-col gap-4 p-4">
      <li>
        <Link
          to="/pessoa/areaprincipal"
          className="text-blue-600 hover:text-blue-800"
        >
          Meus Eventos
        </Link>
      </li>

      <li>
        <Link
          to="/pessoa/areaprincipal/eventosdisponiveis"
          className="text-blue-600 hover:text-blue-800"
        >
          Eventos Disponíveis
        </Link>
      </li>

      <li>
        <Link
          to="/minhaconta"
          className="text-blue-600 hover:text-blue-800"
        >
          Minha Conta
        </Link>
      </li>
    </ul>
  );
}
