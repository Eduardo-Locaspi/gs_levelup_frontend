import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import LoginPage from './pages/LoginPage/index.tsx'
import CadastroPage from './pages/CadastroPage/index.tsx'
import Quem_Sou_Eu_Page from './pages/Quem_Sou_Eu_Page/index.tsx'
import App from './App.tsx'


const routerPrincipal = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      //CAMINHO PADRÃO
      {
        path:"/",
        element:<LoginPage/>,
      },

      // LOGIN
      {
        path:"/quemsoueu",
        element:<Quem_Sou_Eu_Page/>,
      },

      // CADASTRO
      {
        path:"/cadastro",
        children:[
          {
            path:"/pessoas",
            element:<CadastroPage/>
          },
          {
            path:"/empresas",
          },
          {path:"/academico"},
        ]
      }
    ]
  },
  

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routerPrincipal}/>
  </StrictMode>,
)
