import { Outlet } from "react-router-dom";
import AreaSidebar_Pessoa from "../../routes/Pessoa/AreaSidebar_Pessoa/index";

export default function MenuPessoa() {
  return (
    <div className="flex min-h-screen">
      {/* SIDEBAR */}
      <div className="w-64 bg-gray-100">
        <AreaSidebar_Pessoa />
      </div>

      {/* ÁREA FUNCIONAL */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}
