import AreaLogin from "../../routes/AreaLogin";


export default function LoginPage(){


    return(
        // Dividida metade metade
        <div className="flex h-screen">
            <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-8"> 
                
                {/* Logo */}
                <div className="text-4xl font-extrabold text-blue-600">GS_FRONTEND</div>
                
                {/* Subtitulo - slogan */}
                <p className="mt-4 text-xl text-gray-700 text-center">
                    A melhor solução para gerenciar seu negócio.
                </p>
            </div>

            <div className="w-1/2 flex justify-center items-center">
                <AreaLogin/>
            </div>
        </div>
    )
}