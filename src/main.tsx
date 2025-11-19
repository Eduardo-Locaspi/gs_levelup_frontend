import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../src/App.tsx'

import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import LoginPage from './pages/LoginPage/index.tsx'
import CadastroPage from './pages/CadastroPage/index.tsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/login",
        element:<LoginPage/>
      },
      {
        path:"/cadastro",
        children:[
          {
            path:"/pessoas",
            element:<CadastroPage />
          },
          {
            path:"/empresas",
          },
          {path:"/academico"},
        ]
      },
      {
        path:"/quemsoueu",
        element: </> // Componente que retorna quem é a pessoa se cadastrando : pessoa, profissional, inst academica
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
