import { Link } from "react-router-dom";


export default function Itens_Sidebar_pessoa(){


    return(
        <ul className="">
            <li>{/*Meus evento e outros disponiveis*/} 
                <Link to={"/"}>Meus eventos</Link>
            </li> 

            <li>
                <Link to={"/"}></Link>
            </li>
            <li>
                <Link to={"/minhaconta"}>Conta</Link>
            </li>
        </ul>
    )
}