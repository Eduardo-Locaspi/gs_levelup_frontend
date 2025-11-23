// routes/Pessoa/MenuPessoa.tsx
import { Outlet } from "react-router-dom";
import AreaSidebar_Pessoa from "../../routes/Pessoa/AreaSidebar_Pessoa";

export default function MenuPessoa() {
  return (
    <div className="flex">
      {/* SIDEBAR FIXA */}
      <div className="w-64 fixed top-0 left-0 h-screen">
        <AreaSidebar_Pessoa />
      </div>

      {/* ÁREA FUNCIONAL */}
      <div className="flex-1 ml-64 p-6 bg-gray-50 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}