import { createBrowserRouter } from "react-router-dom"
import Main from "../layouts/Main";
import Index from "../components/characterlist/Characterlist"
import Personaje from "../components/personaje/Personaje"
import Contacto from "../components/contact/Contact"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Index />
      },
      {
        path: '/personajes',
        element: <Personaje />
      },
      {
        path: '/contacto',
        element: <Contacto />
      },
    ]
  },
])

export default router;