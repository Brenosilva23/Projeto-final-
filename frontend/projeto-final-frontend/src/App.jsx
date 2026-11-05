import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './Login';
import './login.css';
import Feed from './Feed';
import './feed.css';
import Perfil from './Perfil';
import './perfil.css';
import Configuracao from './Configuracao';

const router = createBrowserRouter([
  {
    path: "/",     
    element: <Login />
  },
  {
    path: "/feed",
    element: <Feed />
  },
  {
    path: "/perfil", 
    element: <Perfil />
  },
  {
    path: "/configuracao",
    element: <Configuracao />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
