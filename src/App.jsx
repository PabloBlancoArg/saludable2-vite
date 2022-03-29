import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IniciarSesion from "./layout/IniciarSesion";
import Layout from "./layout/Layout";
import LoginForm from "./paginas/LoginForm";
import Inicio from "./paginas/Inicio";
import Organizaciones from "./layout/Organizaciones";
import NewOrganizacion from "./paginas/NewOrganizacion";
import ShowUser from "./paginas/ShowUser";
import LayoutCarrito from "./layout/LayoutCarrito";
import LayoutTienda from "./layout/LayoutTienda";
import { StoreProvider } from "./context/StoreProvider";

function App() {
  return (
    <>
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IniciarSesion />}>
            <Route index element={<LoginForm />} />
          </Route>

          <Route path="/o" element={<Organizaciones />}>
            <Route index element={<Inicio />} />
            
            <Route path="tienda" element={<Layout />}>
              <Route index element={<LayoutTienda />} />
              <Route path="cart" element={<LayoutCarrito />} />

              <Route path="login" element={<LoginForm />} />
            </Route>

            <Route path="users" element={<ShowUser />} />
            <Route path="nueva" element={<NewOrganizacion />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </StoreProvider>
    </>
  );
}

export default App;
