import { Link, useNavigate } from "react-router-dom";

export default function Quem_Sou_Eu_Atores(){
    const navigate = useNavigate();

    // Estilos PADRÃO
    const linkClasses = "text-white text-2xl font-semibold w-full py-5 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.03] text-center cursor-pointer flex items-center justify-center";

    return(
        // Ocupa a largura total para se alinhar ao centro do container pai
        <div className="w-full max-w-sm mx-auto p-4">
            <nav className="flex flex-col gap-6"> 
                
                {/* Botão Pessoa */}
                <Link to={"/cadastro/pessoas"} className={`${linkClasses} bg-blue-600 hover:bg-blue-700`}>
                    Pessoa Física
                </Link>

                {/* Botão Empresa */}
                <Link to={"/cadastro/empresas"} className={`${linkClasses} bg-green-600 hover:bg-green-700`}>
                    Empresa
                </Link>
                
                {/* Botão Instituição Acadêmica */}
                <Link to={"/cadastro/academico"} className={`${linkClasses} bg-purple-600 hover:bg-purple-700`}>
                    Instituição Acadêmica
                </Link>
            </nav>

            {/* Botão de Voltar para o Login */}
            <button
                onClick={() => navigate('/')} // Navega de volta para a rota de login
                className="mt-8 text-sm text-gray-500 hover:text-blue-600 transition duration-300"
            >
                Já tenho uma conta. Voltar para o Login
            </button>
        </div>
    )
}