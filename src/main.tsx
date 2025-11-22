import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage/index.tsx";
import CadastroPage from "./pages/CadastroPage/index.tsx";
import Quem_Sou_Eu_Page from "./pages/Quem_Sou_Eu_Page/index.tsx";

import FormCadastroPessoa from "./components/FormCadastro/FormCadastroPessoa/index.tsx";
import FormCadastroEmpresa from "./components/FormCadastro/FormCadastroEmpresa/index.tsx";
import FormCadastroInstituicaoAcademica from "./components/FormCadastro/FormCadastroInstituicaoAcademica/index.tsx";

import MenuPessoa from "./pages/MenuPessoa/index.tsx";
import MenuEmpresa from "./pages/MenuEmpresa/index.tsx";
import MenuInstituicao from "./pages/InstituicaoPage/index.tsx";

import { AuthProvider } from "./context/AuthContext.tsx";
import Area_MeusEventos from "./routes/Pessoa/AreaFuncional_Pessoa/Area_MeusEventos/index.tsx";
import Area_EventosDisponiveis from "./routes/Pessoa/AreaFuncional_Pessoa/Area_EventosDisponiveis/index.tsx";

const router2 = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/quemsoueu", element: <Quem_Sou_Eu_Page /> },
  {
    path: "/cadastro",
    element: <CadastroPage />,
    children: [
      { path: "pessoas", element: <FormCadastroPessoa /> },
      { path: "empresas", element: <FormCadastroEmpresa /> },
      { path: "academico", element: <FormCadastroInstituicaoAcademica /> },
    ],
  },
  {
    path: "/pessoa/areaprincipal",
    element: <MenuPessoa />,
    children: [
      { path: "", element: <Area_MeusEventos /> }, // rota padrão
      { path: "eventosdisponiveis", element: <Area_EventosDisponiveis /> }, // relativa
    ],
  },
  { path: "/empresa/areaprincipal", element: <MenuEmpresa /> },
  { path: "/instituicao/areapricipal", element: <MenuInstituicao /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router2} />
    </AuthProvider>
  </StrictMode>
);
