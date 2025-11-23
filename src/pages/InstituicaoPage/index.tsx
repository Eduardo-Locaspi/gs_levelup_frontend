import { Outlet } from "react-router-dom";
import AreaSidebar_Instituicao from "../../routes/InstituicaoAcademica/AreaSidebar_Instituicao";


export default function MenuInstituicao(){


    return(
        <div className="flex">
            <div className="w-64 fixed top-0 left-0 h-screen">
                {/* SIDEBAR OU TOPBAR */}
                <AreaSidebar_Instituicao/>
            </div>
            
            <div className="flex-1 ml-64 p-6 bg-gray-50 min-h-screen">
                {/* Area Funcional do menu de pessoas */}
                <Outlet/>
            </div>

            
        </div>
    )
}