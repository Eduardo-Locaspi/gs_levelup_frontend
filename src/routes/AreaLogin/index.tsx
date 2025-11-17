import { Link } from "react-router-dom";
import FormLogin from "../../components/FormLogin";


export default function AreaLogin(){


    return(
        <div className="flex flex-col text-center border-2 rounded-md px-5">
            <h1 className="text-4xl my-5">LOGIN</h1>
            <FormLogin/>
            <p className="text-1xl my-5 ">Não tem uma conta? <Link to={"/cadastrar"}> <span className="font-bold text-blue-500">Crie uma conte aqui</span></Link></p>
            
        </div>
    )
}