import Quem_Sou_Eu_Atores from "../../components/Quem_Sou_Eu_Atores";

export default function Quem_Sou_Eu_Page(){

    return(
        // Centraliza vertical e horizontalmente todo o conteúdo na tela
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            
            {/* Card ou Container do Conteúdo */}
            <div className="w-full max-w-xl bg-white p-10 rounded-2xl shadow-2xl text-center">

                {/* Títulos centralizados e formatados */}
                <h1 className="text-5xl font-extrabold text-gray-800 mb-2">
                    Nos conte mais sobre você
                </h1>
                <h2 className="text-2xl text-gray-600 mb-10">
                    Em qual perfil você se encontra?
                </h2>

                <Quem_Sou_Eu_Atores/>
                
            </div>
        </div>
    )
}