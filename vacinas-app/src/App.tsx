import { createBrowserRouter, LoaderFunction, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CamaraView, { camaraLoader } from './pages/CamaraView';
import Dashboard from './pages/Dashboard';
import { Container, Main } from './styles/global';

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
  return (
    <Container>
      <Header />
      <Main>
        <RouterProvider router={router}/>
      </Main>
    </Container>
      
  );
}

export default App;
