import { createBrowserRouter, LoaderFunction, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CamaraView, { camaraLoader } from './pages/CamaraView';
import Dashboard from './pages/Dashboard';
import { Container, Main } from './styles/global';
import { useState } from 'react';
import { GerenteContext } from './contexts/gerenteContext';

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
      }
    ]
  )

  const [username, setUsername ] = useState('g01');
  
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
