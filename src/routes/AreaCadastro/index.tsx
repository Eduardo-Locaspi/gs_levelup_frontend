import { Link, Outlet } from "react-router-dom";
export default function AreaCadastro(){


    return(
        <div className="flex flex-col text-center border-2 rounded-md px-5">
            <h1 className="text-4xl my-5">CADASTRO</h1>
            <Outlet/>
            <p>Já possui uma Conta? <span className="font-bold text-blue-500"><Link to={"/"}>Fazer Login</Link></span></p>
        </div>
    )
}