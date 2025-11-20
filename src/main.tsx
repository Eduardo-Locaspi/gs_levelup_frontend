import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import LoginPage from './pages/LoginPage/index.tsx'
import CadastroPage from './pages/CadastroPage/index.tsx'
import Quem_Sou_Eu_Page from './pages/Quem_Sou_Eu_Page/index.tsx'
// import App from './App.tsx'
import FormCadastroPessoa from './components/FormCadastro/FormCadastroPessoa/index.tsx'
import FormCadastroEmpresa from './components/FormCadastro/FormCadastroEmpresa/index.tsx'
import FormCadastroInstituicaoAcademica from './components/FormCadastro/FormCadastroInstituicaoAcademica/index.tsx'


const router2 = createBrowserRouter([
  {
    // A rota raiz agora é um objeto simples (sem children, por enquanto)
    path:"/",
    element:<LoginPage/>, // Agora o LoginPage é o componente principal em /
  },

  // Rota /quemsoueu
  {path:"/quemsoueu", element:<Quem_Sou_Eu_Page/>},

  // Rota /cadastro/pessoas (ajustei para não aninhar se não houver layout)
  {
    path:"/cadastro",
    element:<CadastroPage/>,
    children:[
      {path:"pessoas",element:<FormCadastroPessoa/>},
      {path:"empresas",element:<FormCadastroEmpresa/>},
      {path:"academico",element:<FormCadastroInstituicaoAcademica/>},
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router2}/>
  </StrictMode>,
)
