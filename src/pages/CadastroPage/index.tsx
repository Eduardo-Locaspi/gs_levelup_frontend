import AreaCadastro from "../../routes/AreaCadastro/index";

export default function CadastroPage(){
    return(
        // Modificado para usar min-h-screen e pt-10/pb-10 e removido items-center.
        // Isso garante que o conteúdo comece no topo da tela e o título não seja 
        // empurrado para fora quando o formulário é longo, resolvendo o problema de visibilidade.
        <div className="flex min-h-screen w-full justify-center p-4 pt-10 pb-10 bg-gray-100">
            <AreaCadastro/>
        </div>
    )
}