import { Link } from "react-router-dom";


export default function Quem_Sou_Eu_Atores(){

    return(
        <nav>
            <li>
                <Link to={"/login/pessoas"}>Pessoa</Link>
                
            </li>
            <li>
                <Link to={"/login/empresas"}>Empresas</Link>
            </li>
            <li>
                <Link to={"/loginacademico"}>Pessoas</Link>
            </li>
        </nav>
    )
}