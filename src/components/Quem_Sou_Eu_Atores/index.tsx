import { Link } from "react-router-dom";


export default function Quem_Sou_Eu_Atores(){

    return(
        // 1. Adicione h-full para ocuper 100% da altura do seu pai (h-screen)
        // 2. Adicione list-none para remover os bullet points
        <nav className="flex flex-col justify-center items-center gap-10 h-full list-none"> 
            
            {/* Use px-12 ou px-16 para preenchimento horizontal mais realista */}
            <li className="text-white text-3xl bg-blue-600 rounded-full py-7 px-16">
                <Link to={"/cadastro/pessoas"}>Pessoas</Link>
            </li>
            <li className="text-white text-3xl bg-blue-600 rounded-full py-7 px-16">
                <Link to={"/cadastro/empresas"}>Empresas</Link>
            </li>
            
            {/* Ajustei o padding para garantir que o botão maior tenha largura suficiente */}
            <li className="text-white text-3xl bg-blue-600 rounded-full py-7 px-10">
            <Link to={"/cadastro/academico"}>Instituições Acadêmicas</Link>
            </li>
        </nav>
    )
}