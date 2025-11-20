import { Link, Outlet } from "react-router-dom";
export default function AreaCadastro(){


    return(
        <div className="flex flex-col text-center border-2 rounded-md p-5 gap-5">
            <Outlet/>
            <p>Já possui uma Conta? <span className="font-bold text-blue-500"><Link to={"/"}>Fazer Login</Link></span></p>
        </div>
        
    )
}