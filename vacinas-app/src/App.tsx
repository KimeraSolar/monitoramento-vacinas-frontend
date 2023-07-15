import { createBrowserRouter, LoaderFunction, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CamaraView, { camaraLoader } from './pages/CamaraView';
import Dashboard from './pages/Dashboard';
import { Container, Main } from './styles/global';
import { useState } from 'react';
import { GerenteContext } from './contexts/gerenteContext';
import Mensagens from './pages/Mensagens';
import InserirCamara from './pages/InserirCamara';
import AbastecerCamara, { abastecimentoCamaraLoader } from './pages/AbastecerCamara';
import Configuracoes from './pages/Configuracoes';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Dashboard/>,
      },
      {
        path: "/camara/:camaraId",
        element: <CamaraView/>,
        loader: camaraLoader
      },
      {
        path: "/camara/:camaraId/abastecer",
        element: <AbastecerCamara/>,
        loader: abastecimentoCamaraLoader
      },
      {
        path: "/camara/inserir",
        element: <InserirCamara />,
      },
      {
        path: "/mensagens",
        element: <Mensagens />,
      },
      {
        path: "/configuracoes",
        element: <Configuracoes />,
      }
    ]
  )

  const [username, setUsername ] = useState('g01');
  // const [username, setUsername ] = useState('P001E001Ci001G001');
  
  
  return (
    <GerenteContext.Provider value={{username, setUsername}}>
      <Container>
        <Header />
        <Main>
          <RouterProvider router={router}/>
        </Main>
      </Container>
    </GerenteContext.Provider>
  );
}

export default App;
